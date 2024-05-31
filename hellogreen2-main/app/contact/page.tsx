"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { RiAccountCircleFill } from "react-icons/ri";

const SignInPage: FC = (): ReactElement => {
 

  return (
    <>
       <div className=" flex items-center justify-center py-20">

       
       <div className=' flex-col space-y-4 flex items-center justify-center'>
                    <p className=' font-medium text-lg'>Contact Us</p>
    
                    <div className='  space-y-6 flex-col flex items-center justify-center '>
                        <Link href='' className=' items-center justify-center flex-col flex  gap-3'><Image src='/assets/icons/Phone.svg' width={20} height={20} alt='phone'/><p className=''>+94 76 260 5 123</p></Link>
                        <Link href='' className=' items-center justify-center flex-col flex  gap-3'><Image src='/assets/icons/email.svg' width={20} height={20} alt='phone'/><p className=''>hellogreen@hello.com</p></Link>
                        <Link href='' className=' items-center justify-center flex-col flex  gap-3'><Image src='/assets/icons/location.svg' width={20} height={20} alt='phone'/><p className=''>No: 91, Berker Street, London</p></Link>
                        
                    </div>
        </div>

        </div>
        
    </>
  );
};

export default SignInPage;
