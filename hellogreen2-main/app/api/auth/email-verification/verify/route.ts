import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import sendMail from "@/lib/utils/sendMail";
import WelcomeEmail from "@/components/emails/Welcome";
import createResponse from "@/lib/utils/createResponse";
import type { IUser } from "@/lib/types";
import { z } from "zod";
import {
  EMAIl_SUBJECTS,
  EMAIL_VERIFICATION_STATUSES,
} from "@/lib/utils/constants";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // get the token from the query parameters
    const searchParams = request.nextUrl.searchParams;

    const token = searchParams.get("token");
    const email = searchParams.get("email");

    // if the token or email is not present, redirect to the email verification page as invalid
    if (!token || !email)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.INVALID}&email=${email}`,
          request.url
        )
      );

    //validate the token and email
    const emailSchema = z.string().email();
    const tokenSchema = z.string().min(32).max(32);

    const validatedEmail = emailSchema.safeParse(email);
    const validatedToken = tokenSchema.safeParse(token);

    // if the token or email is invalid, redirect to the email verification page as invalid
    if (!validatedEmail.success || !validatedToken.success)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.INVALID}&email=${email}`,
          request.url
        )
      );

    // if the token is present, continue
    // get the user from the database
    const user: IUser | null = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // if the user does not exist, redirect to the email verification page as invalid
    if (!user)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.INVALID}&email=${email}`,
          request.url
        )
      );

    // if the user exists, continue
    // if email verification is already verified, redirect to the email verification page as already verified
    if (user.emailVarification.verified)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.ALREADY_VERIFIED}&email=${email}`,
          request.url
        )
      );

    // if email not already verified, continue
    // if token is expired, redirect to the email verification page as expired
    if (user.emailVarification.tokenExpiry < Date.now())
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.EXPIRED}&email=${email}`,
          request.url
        )
      );

    // if token is not expired, continue
    // if the token is not matched, redirect to the email verification page as invalid
    if (user.emailVarification.token !== token)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.INVALID}&email=${email}`,
          request.url
        )
      );

    // if the token is matched, continue
    // update the user in the database
    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        emailVarification: {
          verified: true,
          token: "",
          tokenExpiry: 0,
        },
      },
    });

    // if the user is updated, continue
    // send the welcome email
    await sendMail(email, EMAIl_SUBJECTS.WELCOME, WelcomeEmail, {
      username: updatedUser.username,
    });

    // redirect to the email verification page as success
    return NextResponse.redirect(
      new URL(
        `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.SUCCESS}&email=${email}`,
        request.url
      )
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      createResponse("error", 500, null, {
        message: "something went wrong",
      })
    );
  }
}
