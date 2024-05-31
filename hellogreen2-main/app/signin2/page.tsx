"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { RiAccountCircleFill } from "react-icons/ri";

const SignInPage: FC = (): ReactElement => {
 

  return (
    <>
       <div className="py-40">
        <div className="  flex flex-col items-center justify-center gap-10 ">
          <div className="">
            <p className=" text-2xl font-semibold"> LogIn With Hello Green </p>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <p className=" text-md font-semibold">Email or Username</p>
            <input type="text" className=" bg-white border-emerald-300 border rounded-md w-[400px] h-[40px] px-5 outline-none" />
          </div>

          <div className=" flex flex-col items-center justify-center">
            <p className=" text-md font-semibold">Password</p>
            <input type="password" className=" bg-white border-emerald-300 border rounded-md w-[400px] h-[40px] px-5 outline-none" />
          </div>

          <Link href="/" className="text-white font-bold bg-green-500 px-20 py-3 rounded-2xl"><p>Login</p></Link>
        </div>
       </div>
        
    </>
  );
};

export default SignInPage;
