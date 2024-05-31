"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import Plastic from "@/public/images/Plastic.jpg";
import Polythene from "@/public/images/Polythene.jpg";
import Glass from "@/public/images/glass.jpg";

const blogPage: FC = (): ReactElement => {
 

  return (
    <>
        <div className=" py-20 items-center justify-center flex flex-row gap-5">
          
          <div>
            <Link href="/plasticartical">
            <div className=" w-[250px] text-center bg-white shadow-lg flex flex-col items-center justify-center  gap-5">
              <div className=" w-full bg-green-400 items-center justify-center flex ">
              <Image
                      src={Plastic}
                      width={500}
                      height={500}
                      alt="plastic"
                      />
              </div>
              <div className=" flex flex-col px-3 gap-2">
                <p className=" text-lg font-semibold text-start">The Plastic Predicament: Understanding Plastic ...</p>
                <p className=" text-sm text-start">Plastic, a versatile and ubiquitous material, has revolutionized modern living with its convenience and durability. Howeve ...</p>
              </div>
              
            </div>
            </Link>
          </div>


          <div>
            <Link href="/polytheneartical">
            <div className=" w-[250px] text-center bg-white shadow-lg flex flex-col items-center justify-center  gap-5">
              <div className=" w-full bg-green-400 items-center justify-center flex ">
              <Image
                      src={Polythene}
                      width={500}
                      height={500}
                      alt="plastic"
                      />
              </div>
              <div className=" flex flex-col px-3 gap-2">
                <p className=" text-lg font-semibold text-start">Polythene Pollution: Understanding the Impact and Strategies ...</p>
                <p className=" text-sm text-start">Polythene, a type of plastic commonly used in packaging and everyday products, has become synonymous with convenience        ...</p>
              </div>
              
            </div>
            </Link>
          </div>


          <div>
            <Link href="/glassartical">
            <div className=" w-[250px] text-center bg-white shadow-lg flex flex-col items-center justify-center  gap-5">
              <div className=" w-full bg-green-400 items-center justify-center flex ">
              <Image
                      src={Glass}
                      width={700}
                      height={500}
                      alt="plastic"
                      />
              </div>
              <div className=" flex flex-col px-3 gap-2">
                <p className=" text-lg font-semibold text-start">Glass Waste Management: A Sustainable Solution ...</p>
                <p className=" text-sm text-start">Glass, a versatile and recyclable material, has been used for centuries in various...</p>
              </div>
              
            </div>
            </Link>
          </div>
          
        </div>
    </>
  );
};

export default blogPage;
