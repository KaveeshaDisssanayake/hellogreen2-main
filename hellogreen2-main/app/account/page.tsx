"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { RiAccountCircleFill } from "react-icons/ri";

const Requestbuy: FC = (): ReactElement => {
 

  return (
    <>
        <div className=" ml-96 py-20">
            <div className=" flex flex-col gap-9">

            
                <div className=" flex items-center justify-start gap-10">
                    <Link href='/account' className='text-black'><RiAccountCircleFill className=" text-9xl"/></Link>
                
                    <div className=" flex flex-col ">
                        <p className=" text-2xl font-bold">Isuru Chandima</p>
                        <p className=" text-md font-semibold opacity-40">isuruchamdima@gmail.com</p>
                    </div>            
                </div>

                <div className=" flex flex-col gap-8">
                        <div className=" space-y-2">
                            <p className=" text-md font-semibold">First Name</p>
                            <div className=" flex items-center  gap-5">
                                <input type="text" placeholder="Isuru" className=" bg-white border-emerald-300 border rounded-md w-[400px] h-[40px] px-5 outline-none" />
                                <a href="#" ><p className=" text-red-600 font-semibold">Edit</p></a>
                            </div>
                            
                        </div>

                        <div className=" space-y-2">
                            <p className=" text-md font-semibold">Last Name</p>
                            <div className=" flex items-center  gap-5">
                                <input type="text" placeholder="Chandima" className=" bg-white border-emerald-300 border rounded-md w-[400px] h-[40px] px-5 outline-none" />
                                <a href="#" ><p className=" text-red-600 font-semibold">Edit</p></a>
                            </div>
                            
                        </div>

                        <div className=" space-y-2">
                            <p className=" text-md font-semibold">E mail</p>
                            <div className=" flex items-center  gap-5">
                                <input type="text" placeholder="isuruchandima@gmial.com" className=" bg-white border-emerald-300 border rounded-md w-[400px] h-[40px] px-5 outline-none" />
                                <a href="#" ><p className=" text-red-600 font-semibold">Edit</p></a>
                            </div>
                            
                        </div>

                        <div className=" space-y-2">
                            <p className=" text-md font-semibold">Phone Number</p>
                            <div className=" flex items-center  gap-5">
                                <input type="text" placeholder="0762605123" className=" bg-white border-emerald-300 border rounded-md w-[400px] h-[40px] px-5 outline-none" />
                                <a href="#" ><p className=" text-red-600 font-semibold">Edit</p></a>
                            </div>
                            
                        </div>
                </div>

                <div className=" flex flex-col gap-5">
                    <div>
                        <p className=" text-3xl font-bold">Your Requests</p>
                    </div>

                    <div>
                        <p className=" font-semibold text-2xl underline">Request For Buy</p>
                    </div>

                    

                    <div className=" flex flex-col gap-9">

                            <div className=" flex flex-col ml-10 gap-4">
                                <p className=" font-semibold text-xl">Request Items and quantity</p>

                                <div className=" flex items-center gap-10 ml-10">
                                    <p className=" text-lg font-semibold">Plastic</p>
                                    <p>5 kg</p>
                                </div>

                                <div className=" flex items-center gap-10 ml-10">
                                    <p className=" text-lg font-semibold">Polythene</p>
                                    <p>10 kg</p>
                                </div>
                            </div>

                        {/* <div className=" flex flex-col ml-10 gap-4">
                            <p className=" font-semibold text-xl">Request Date</p>

                            <div className=" flex items-center gap-10 ml-10">
                                <p className=" text-lg font-semibold">2024 / 07 / 04</p>
                                
                            </div>
                        </div> */}

                        <div className=" flex flex-col ml-10 gap-4">
                            <p className=" font-semibold text-xl">Request Status</p>

                            <div className=" flex items-center gap-10 ml-10">
                                <p className=" text-lg font-semibold bg-orange-200 px-2 py-1 rounded-full">Processing</p>
                                
                            </div>
                        </div>
                    </div>
                    

                    
                </div>
            </div>

                
        </div>
        
    </>
  );
};

export default Requestbuy;
