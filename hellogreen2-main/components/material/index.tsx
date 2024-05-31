"use client";
import Image from "next/image";
import { FC, ReactElement, useState } from "react";

const Material: FC = (): ReactElement => {

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
  

  return (
    <>
      <div>
            <div className=" space-y-2">
                <p className=" text-md font-semibold">
                What materials do you need to buy?
                </p>
                <div className="flex  items-center justify-center gap-3 lg:flex-row">
                <div
                    className={`h-[70px] w-[200px]  shadow-xl ${
                    state.materials.includes({ material: "plastic", quantity: 0 })
                        ? "bg-green-400"
                        : null
                    }  border-md flex  items-center gap-3 justify-center border rounded-xl`}
                    onClick={() =>
                    setState({
                        ...state,
                        materials: [{ material: "plastic", quantity: 0 }],
                    })
                    }
                >
                    <Image
                    src="/assets/icons/plastic.svg"
                    width={30}
                    height={30}
                    alt="plastic"
                    />

                    <p className=" font-medium text-xl">Plastic</p>
                </div>
                <div
                    className="h-[70px] w-[200px]  shadow-xl bg-white border-md flex  items-center gap-3 justify-center border rounded-xl"
                    onClick={() =>
                    setState({
                        ...state,
                        materials: [{ material: "polythene", quantity: 0 }],
                    })
                    }
                >
                    <Image
                    src="/assets/icons/bag 1.svg"
                    width={30}
                    height={30}
                    alt="Polythene"
                    />

                    <p className=" font-medium text-xl">Polythene</p>
                </div>
                <div
                    className="h-[70px] w-[200px]  shadow-xl bg-white border-md flex  items-center gap-3 justify-center border rounded-xl"
                    onClick={() =>
                    setState({
                        ...state,
                        materials: [{ material: "styrofoam", quantity: 0 }],
                    })
                    }
                >
                    <Image
                    src="/assets/icons/food-container.svg"
                    width={30}
                    height={30}
                    alt="Styrofoam"
                    />

                    <p className=" font-medium text-md">Styrofoam</p>
                </div>
                <div
                    className="h-[70px] w-[200px]  shadow-xl bg-white border-md flex  items-center gap-3 justify-center border rounded-xl"
                    onClick={() =>
                    setState({
                        ...state,
                        materials: [{ material: "glass", quantity: 0 }],
                    })
                    }
                >
                    <Image
                    src="/assets/icons/glass.svg"
                    width={30}
                    height={30}
                    alt="Glass"
                    />

                    <p className=" font-medium text-xl">Glass</p>
                </div>
                <div
                    className="h-[70px] w-[200px]  shadow-xl bg-white border-md flex  items-center gap-3 justify-center border rounded-xl"
                    onClick={() =>
                    setState({
                        ...state,
                        materials: [{ material: "iron", quantity: 0 }],
                    })
                    }
                >
                    <Image
                    src="/assets/icons/iron.svg"
                    width={30}
                    height={30}
                    alt="Iron"
                    />

                    <p className=" font-medium text-xl">Iron</p>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Material;
