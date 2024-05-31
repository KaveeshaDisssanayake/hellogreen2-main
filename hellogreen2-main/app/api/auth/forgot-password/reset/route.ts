import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import createResponse from "@/lib/utils/createResponse";
import { z } from "zod";
import { IUser } from "@/lib/types";
import bcrypt from "bcrypt";
import sendMail from "@/lib/utils/sendMail";
import { EMAIl_SUBJECTS } from "@/lib/utils/constants";
import PasswordResetSuccess from "@/components/emails/PasswordResetSuccess";

const prisma = new PrismaClient();

export async function POST(requset: NextRequest) {
  try {
    // get the password reset token form the search parameters
    const searchParams = requset.nextUrl.searchParams;
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    // get the new password form the request body
    const { newPassword } = await requset.json();

    // if the token or email is not present, return an error as invalid request
    if (!token || !email)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "invalid request",
        })
      );

    // if password is not present, return an error as password is required
    if (!newPassword)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "password is required",
        })
      );

    // validate the email, token and password
    const emailSchema = z.string().email();
    const tokenSchema = z.string().min(32).max(32);
    const passwordSchema = z.string().min(8);

    const validatedEmail = emailSchema.safeParse(email);
    const validatedToken = tokenSchema.safeParse(token);
    const validatedPassword = passwordSchema.safeParse(newPassword);

    // if email is invalid, return an error as invalid request
    if (!validatedEmail.success)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "invalid request",
        })
      );

    // if token is invalid, return an error as invalid request
    if (!validatedToken.success)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "invalid request",
        })
      );

    // if password is invalid, return an error as invalid password should be at least 8 characters long
    if (!validatedPassword.success)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "invalid password, should be at least 8 characters long",
        })
      );

    // if all the validations are successful, check user exists or not
    const user: IUser | null = await prisma.user.findUnique({
      where: { email: validatedEmail.data },
    });

    // if user does not exist, return an error as invalid request
    if (!user)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "invalid request",
        })
      );

    // if user exists, check if the token is expired or not
    if (user.passwordReset!.tokenExpiry < Date.now())
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "password reset link expired",
        })
      );

    // if token hasn't expired, check if the token is matched or not
    if (user.passwordReset!.token !== validatedToken.data)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "invalid request",
        })
      );

    // if token is matched, hash the password and update the user's password and passwordReset object
    const hashedPassword = await bcrypt.hash(validatedPassword.data, 10);
    const updatedUser = await prisma.user.update({
      where: { email: validatedEmail.data },
      data: {
        password: hashedPassword,
        passwordReset: {
          token: "",
          tokenExpiry: 0,
        },
      },
    });

    // send password reset success email
    sendMail(
      updatedUser.email,
      EMAIl_SUBJECTS.PASSWORD_RESET_SUCCESS,
      PasswordResetSuccess,
      {}
    );

    // return a success response
    return NextResponse.json(
      createResponse(
        "success",
        200,
        {
          message: "password reset successful",
        },
        null
      )
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "something went wrong",
        })
      );
    }
  }
}
