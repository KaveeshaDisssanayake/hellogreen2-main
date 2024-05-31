import createResponse from "@/lib/utils/createResponse";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { IUser } from "@/lib/types";
import bcrypt from "bcrypt";
import sendMail from "@/lib/utils/sendMail";
import { EMAIl_SUBJECTS } from "@/lib/utils/constants";
import PasswordUpdateSuccess from "@/components/emails/PasswordUpdateSuccess";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // get old password, email and new password from the request body
    const { oldPassword, newPassword, email } = await request.json();

    // if old password or new password is not present, return an error as require fields are missing
    if (!oldPassword || !newPassword)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "required fields are missing",
        })
      );

    // if email is not present, return an error as require bad request
    if (!email)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "bad request",
          details: "email is required",
        })
      );

    // validate the email and passwords
    const emailSchema = z.string().email();
    const passwordSchema = z.string().min(8);

    const validatedEmail = emailSchema.safeParse(email);
    const validatedOldPassword = passwordSchema.safeParse(oldPassword);
    const validatedNewPassword = passwordSchema.safeParse(newPassword);

    // if email is invalid, return an error as bad request
    if (!validatedEmail.success)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "bad request",
          details: "invalid email",
        })
      );

    // if old password or new password is invalid, return an error as password needs to be at least 8 characters long
    if (!validatedOldPassword.success || !validatedNewPassword.success)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "bad request",
          details: "invalid old password",
        })
      );

    // check if the user exists
    const user: IUser | null = await prisma.user.findUnique({
      where: { email: email },
    });

    // if user does not exist, return an error as bad request
    if (!user)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "bad request",
          details: "user does not exist",
        })
      );

    // if user exists, check if the old password is correct
    const isPasswordValid = await bcrypt.compare(
      validatedOldPassword.data,
      user.password
    );

    // if old password is not correct, return an error as bad request
    if (!isPasswordValid)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "old password is not correct",
          details: "invalid old password",
        })
      );

    // if old password is correct, hash the new password and update the user's password
    const hashedPassword = await bcrypt.hash(validatedNewPassword.data, 10);
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: {
        password: hashedPassword,
      },
    });

    // send password update success email
    sendMail(
      updatedUser.email,
      EMAIl_SUBJECTS.PASSWORD_UPDATE_SUCCESS,
      PasswordUpdateSuccess,
      {}
    );

    // return a success response
    return NextResponse.json(
      createResponse(
        "success",
        200,
        {
          message: "password updated",
        },
        null
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json(
        createResponse("error", 500, null, {
          message: "internal server error",
        })
      );
    }
  }
}
