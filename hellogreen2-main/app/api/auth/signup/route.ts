import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { z } from "zod";
import sendMail from "@/lib/utils/sendMail";
import randomString from "@/lib/utils/randomString";
import { VerifyEmail } from "@/components/emails/Verification";
import { EMAIl_SUBJECTS } from "@/lib/utils/constants";
import createResponse from "@/lib/utils/createResponse";
import type { IUser } from "@/lib/types";

const prisma = new PrismaClient();

export async function POST(requset: NextRequest) {
  try {
    // get the username, email, and password from the request body
    const { username, email, password } = await requset.json();

    // check availability of username, email, and password
    if (!username || !email || !password)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "username, email, and password are required",
        })
      );

    // validate the username, email, and password
    const userSchema = z.object({
      username: z.string().min(3).max(20),
      email: z.string().email(),
      password: z.string().min(8).max(20),
    });

    const validatedUser = userSchema.safeParse({
      username,
      email,
      password,
    });

    // if the username, email, or password is invalid, return an error
    if (!validatedUser.success)
      return NextResponse.json(
        createResponse("error", 400, null, {
          message: "username, email, or password is invalid",
        })
      );

    // if the username and email not exists, continue
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the user in the database
    const newUser: IUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        authProviders: {
          google: false,
          credentials: true,
          github: false,
        },
        emailVarification: {
          verified: false,
          token: randomString(32),
          tokenExpiry: 1000 * 60 * 60 * 24 + Date.now(),
        },
        passwordReset: {
          token: "",
          tokenExpiry: 0,
        },
      },
    });

    console.log(typeof newUser);

    const verificationLink = `http://localhost:3000/api/auth/verify-email?token=${newUser.emailVarification.token}&email=${email}`;

    // // send the email verification
    // await sendMail(email, EMAIl_SUBJECTS.VERIFY_EMAIL, VerifyEmail, {
      // link: verificationLink,
    // });

    // return the username and email
    return NextResponse.json(
      createResponse(
        "success",
        200,
        {
          username: newUser.username,
          email: newUser.email,
        },
        null
      )
    );
  } catch (error) {
    console.log(error);

    // if the error is a prisma error, return a custom error
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json(
          createResponse("error", 400, null, {
            message: "username or email already exists",
          })
        );
      }
    }

    // if the error is not a prisma error, return a generic error
    if (error instanceof Error) {
      return NextResponse.json(
        createResponse("error", 500, null, {
          message: "something went wrong",
        })
      );
    }
  }
}
