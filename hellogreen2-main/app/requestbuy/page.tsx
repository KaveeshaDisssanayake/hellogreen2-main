"use client";
import Material from "@/components/material";
import Quantity from "@/components/quantity";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FC, ReactElement, useState } from "react";

const Requestbuy: FC = (): ReactElement => {
  type State = {
    name: string;
    phoneNumber: string;
    address: string;
    materials: [{ material: string; quantity: number }];
  };

  const [state, setState] = useState<State>({
    name: "",
    phoneNumber: "",
    address: "",
    materials: [{ material: "plastic", quantity: 0 }],
  });

  console.log(state);

  return (
    <>
      <div className=" py-20  items-center justify-center flex flex-col">
        <div className="py-10">
          <p className=" text-3xl font-bold">Request for Buy</p>
        </div>

        <div className="flex flex-col space-y-10">
          <div className=" space-y-2">
            <p className=" text-md font-semibold">Name</p>
            <input
              type="text"
              className=" bg-white border-emerald-300 border rounded-md w-[1080px] h-[40px] px-5 outline-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, name: e.target.value })
              }
            />
          </div>

          <div className=" space-y-2">
            <p className=" text-md font-semibold">Phone Number</p>
            <input
              type="text"
              className=" bg-white border-emerald-300 border rounded-md w-[1080px] h-[40px] px-5 outline-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, phoneNumber: e.target.value })
              }
            />
          </div>

          <div className=" space-y-2">
            <p className=" text-md font-semibold">Address</p>
            <input
              type="text"
              className=" bg-white border-emerald-300 border rounded-md w-[1080px] h-[40px] px-5 outline-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, address: e.target.value })
              }
            />
          </div>

          <Material/>

          <Quantity/>

          <div className="mt-10">
            <Link
              href="/requestbuy"
              className="bg-green-500 w-[200px] sm:w-[200px] py-5 h-full flex items-center justify-center text-white rounded-lg font-semibold "
            >
              Request for Buy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requestbuy;
