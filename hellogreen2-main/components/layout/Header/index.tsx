"use client";
import { FC, ReactElement, useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import profileImg from "@/public/images/Logo.svg";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import MobileNavDrawer from "../MobileNavDrawer";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { RiAccountCircleFill } from "react-icons/ri";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <div className=" space-x-4 items-center hidden lg:flex ">
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "text-primary bg-green-500  rounded-lg text-white"
            : "text-black"
        } flex items-center justify-start gap-4  p-2`}
      >
        Home
      </Link>

      <Link
        href="/aboutus"
        className={`${
          pathname === "/about"
            ? "text-primary bg-green-500  rounded-lg text-white"
            : "text-black"
        } flex items-center justify-start gap-4  p-2`}
      >
        About
      </Link>

      <Link
        href="/blogpage"
        className={`${
          pathname === "/blog"
            ? "text-primary bg-green-500  rounded-lg text-white"
            : "text-black"
        } flex items-center justify-start gap-4  p-2`}
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className={`${
          pathname === "/contact"
            ? "text-primary bg-green-500  rounded-lg text-white"
            : "text-black"
        } flex items-center justify-start gap-4  p-2`}
      >
        Contact
      </Link>
    </div>
  );
};

const Header: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <MobileNavDrawer open={open} setOpen={setOpen} />
      <header className="w-full h-[75px] px-6 border-b shadow-md  bg-white z-50">
        <div className="flex items-center justify-between h-full ">
          {/* logo section  */}
          <div className="flex items-center justify-center lg:px-10">
            <Link href="/">
              <Image
                src={profileImg}
                alt="helloGreenLogo"
                width={44}
                priority
                className=" "
              />
            </Link>
          </div>
          {/*  */}

          <div className=" space-x-8 font-medium py-2  max-lg:hidden max">
            <NavContent />
          </div>

          <div className="flex space-x-2 items-center">
            {/* <ThemeSwitcher /> */}
            {/* <Button size="sm" className=" flex">Sign In</Button> */}
            <div className=" hidden lg:flex items-center justify-center gap-7">





              <div>
                <Link href="/account" className="text-black">
                  <RiAccountCircleFill className=" text-3xl" />
                </Link>
              </div>



              <div className=" flex gap-3">
                <div>
                  <Link
                    href="/signin2"
                    className="text-white px-7 py-3 rounded-2xl bg-black"
                  >
                    Sign In
                  </Link>
                </div>

                <div>
                  <Link
                    href="/signup2"
                    className="text-black  hover:bg-green-300 px-7 py-3 rounded-2x hover:border-gree border-black border rounded-2xl"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>





              

              <div className=" flex">
                <Link
                  href="/requestbuy"
                  className="bg-green-500 w-40 py-4 h-full flex items-center justify-center rounded-l-xl text-white"
                >
                  Request for Buy
                </Link>
                <Link
                  href="/requestpickup"
                  className=" bg-[#13404F] w-40 py-4 h-full flex items-center justify-center rounded-r-xl text-white"
                >
                  Request for PickUp
                </Link>
              </div>
            </div>

            <div
              onClick={() => setOpen(true)}
              className="cursor-pointer lg:hidden"
            >
              <Menu width={40} height={44} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
