"use client";

import { FC, ReactElement, useState } from "react";

const Quantity: FC = (): ReactElement => {

   
  

  return (
    <>
      <div className=" space-y-2">
            <div>
              <p className=" text-md font-semibold">
                How much do you need to buy
              </p>
            </div>

            <div className=" flex gap-20">
              <div className=" space-y-1">
                <p className=" text-md font-semibold">Plastic</p>
                <input
                  type="text"
                  className=" bg-white border-emerald-300 border rounded-md w-[150px] h-[40px] px-5 outline-none"
                />
              </div>

              <div className=" space-y-1">
                <p className=" text-md font-semibold">Polythene</p>
                <input
                  type="text"
                  className=" bg-white border-emerald-300 border rounded-md w-[150px] h-[40px] px-5 outline-none"
                />
              </div>

              <div className=" space-y-1">
                <p className=" text-md font-semibold">Styrofoam</p>
                <input
                  type="text"
                  className=" bg-white border-emerald-300 border rounded-md w-[150px] h-[40px] px-5 outline-none"
                />
              </div>
              <div className=" space-y-1">
                <p className=" text-md font-semibold">Glass</p>
                <input
                  type="text"
                  className=" bg-white border-emerald-300 border rounded-md w-[150px] h-[40px] px-5 outline-none"
                />
              </div>
              <div className=" space-y-1">
                <p className=" text-md font-semibold">Iron</p>
                <input
                  type="text"
                  className=" bg-white border-emerald-300 border rounded-md w-[150px] h-[40px] px-5 outline-none"
                />
              </div>
            </div>
          </div>
    </>
  );
};

export default Quantity;
