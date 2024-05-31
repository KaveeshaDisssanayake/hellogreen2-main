import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  providers: [
    // create a credentials provider
    CredentialsProvider({
      name: "Hello green",
      credentials: {
        usernameORemail: { type: "text", label: "Email or username" },
        password: { type: "password", label: "Password" },
      },
      async authorize(credentials) {
        // check if credential is not null
        if (credentials === undefined || credentials === null) {
          return null;
        }

        // get the username or email, and password from the credentials
        const { usernameORemail, password } = credentials;

        // check if the username or email already exists in the database
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              {
                username: usernameORemail,
              },
              {
                email: usernameORemail,
              },
            ],
          },
        });

        // if the username or email not exists, return an error
        if (existingUser == null) {
          console.log("user not found");
          return null;
        }

        // compare the password with the hashed password
        const passwordMatch = await bcrypt.compare(
          password,
          existingUser.password
        );

        // if the password is incorrect, return an error
        if (!passwordMatch) {
          console.log("password not match");
          return null;
        }

        // return the user
        return existingUser;
      },
    }),
    // create a google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // callbacks: {
  //   async session({ session }) {
  //     return session;
  //   },
  //   async signIn({ profile }) {
  //     try {
  //       // if profile is undefined or null, return false
  //       if (profile === undefined || profile === null) {
  //         return false;
  //       }

  //       // check user already exists in the database
  //       const existingUser = await prisma.user.findFirst({
  //         where: {
  //           email: profile.email,
  //         },
  //       });

  //       // if user is not exists, create new user
  //       if (!existingUser) {
  //         await prisma.user.create({
  //           data: {
  //             username: profile.email!,
  //             email: profile.email!,
  //             password: "",
  //             authProviders: {
  //               google: true,
  //               credentials: false,
  //               github: false,
  //             },
  //             emailVarification: {
  //               verified: true,
  //               token: "",
  //               tokenExpiry: 0,
  //             },
  //           },
  //         });

  //         return true;
  //       }

  //       // if user is exists update authProviders
  //       const existingProviders = existingUser.authProviders;
  //       return true;
  //     } catch (error) {
  //       return false;
  //     }
  //   },
  // },
  debug: process.env.NODE_ENV === "development",
};

export default authOptions;
