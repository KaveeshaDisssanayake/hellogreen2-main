import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import { z } from "zod";
import randomString from "@/lib/utils/randomString";
import sendMail from "@/lib/utils/sendMail";
import PasswordResetRequest from "@/components/emails/PasswordResetRequest";
import { EMAIl_SUBJECTS } from "@/lib/utils/constants";
import createResponse from "@/lib/utils/createResponse";

const prisma = new PrismaClient();

export async function POST(requset: NextRequest) {
  try {
    // get email form the request body
    const { email } = await requset.json();

    // if email is not present send an error
    if (!email)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "email is required",
        })
      );

    // validate the email
    const emailSchema = z.string().email();

    const validatedEmail = emailSchema.safeParse(email);

    // if email is invalid send and error
    if (!validatedEmail.success)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "email is invalid",
        })
      );

    //upate user's passwordReset object or return an error via catch block if user does not exist
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: {
        passwordReset: {
          token: randomString(32),
          tokenExpiry: 1000 * 60 * 60 * 24 + Date.now(),
        },
      },
    });

    // generate password reset link
    const passwordRestLink = `http://localhost:3000/api/auth/forgot-password/reset?token=${
      updatedUser.passwordReset!.token
    }&email=${updatedUser.email}`;

    //send password rest link via email
    sendMail(
      updatedUser.email,
      EMAIl_SUBJECTS.RESET_PASSWORD,
      PasswordResetRequest,
      { link: passwordRestLink }
    );

    return NextResponse.json(
      createResponse(
        "success",
        200,
        {
          message: "password reset link sent",
        },
        null
      )
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          createResponse("error", 400, null, {
            message: "user couldn't found",
          })
        );
      } else {
        return NextResponse.json(
          createResponse("error", 500, null, {
            message: "something went wrong",
          })
        );
      }
    }
  }
}
