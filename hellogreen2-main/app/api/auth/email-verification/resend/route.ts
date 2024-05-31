import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import createResponse from "@/lib/utils/createResponse";
import { z } from "zod";
import {
  EMAIL_VERIFICATION_STATUSES,
  EMAIl_SUBJECTS,
} from "@/lib/utils/constants";
import randomString from "@/lib/utils/randomString";
import sendMail from "@/lib/utils/sendMail";
import { VerifyEmail } from "@/components/emails/Verification";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // get email from the query parameters
    const searchParams = request.nextUrl.searchParams;

    const email = searchParams.get("email");

    // if email is not present, redirect to the email verification page as invalid
    if (!email)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.INVALID}&email=${email}`,
          request.url
        )
      );

    // if email is present, continue
    // validate the email
    const emailSchema = z.string().email();

    const validatedEmail = emailSchema.safeParse(email);

    // if email is invalid, redirect to the email verification page as invalid
    if (!validatedEmail.success)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.INVALID}&email=${email}`,
          request.url
        )
      );

    // if email is valid, continue
    // get the user from the database
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // if user does not exist, redirect to the email verification page as invalid
    if (!user)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.INVALID}&email=${email}`,
          request.url
        )
      );

    // if user exist, continue
    // if user is already verified, redirect to the email verification page as already verified
    if (user.emailVarification.verified)
      return NextResponse.redirect(
        new URL(
          `/email-verification?status=${EMAIL_VERIFICATION_STATUSES.ALREADY_VERIFIED}&email=${email}`,
          request.url
        )
      );

    // if user is not verified, continue
    // create a new email verification token
    const newToken = randomString(32);

    // update the user in the database
    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        emailVarification: {
          verified: false,
          token: newToken,
          tokenExpiry: 1000 * 60 * 60 * 24 + Date.now(),
        },
      },
    });

    // generate email verification link
    const emailVerificationLink = `http://localhost:3000/api/auth/verify-email?token=${newToken}&email=${updatedUser.email}`;

    // send the email verification
    await sendMail(email, EMAIl_SUBJECTS.VERIFY_EMAIL, VerifyEmail, {
      link: emailVerificationLink,
    });

    // return success response
    return NextResponse.json(
      createResponse(
        "success",
        200,
        {
          message: "email verification link send",
        },
        null
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
