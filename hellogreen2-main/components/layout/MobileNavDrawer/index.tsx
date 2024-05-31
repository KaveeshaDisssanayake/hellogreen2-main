"use client";
import { FC, ReactElement } from "react";
import { Dialog, DialogContent, Overlay } from "@radix-ui/react-dialog";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/images/Logo.svg";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <div className="items-center flex-col">
      <Link href="/" className={`${
            pathname === "/" ? "text-primary bg-green-500  rounded-lg text-white" : "text-slate-900 dark:text-slate-100"} flex items-center justify-start  p-2`}>
          Home
      </Link>

      <Link href="/about" className={`${
            pathname === "/about" ? "text-primary bg-green-500  rounded-lg text-white" : "text-slate-900 dark:text-slate-100"} flex items-center justify-start   p-2`}>
          About
      </Link>

      <Link href="/blog" className={`${
            pathname === "/blog" ? "text-primary bg-green-500  rounded-lg text-white" : "text-slate-900 dark:text-slate-100"} flex items-center justify-start   p-2`}>
          Blog
      </Link>

      <Link href="/contact" className={`${
            pathname === "/contact" ? "text-primary bg-green-500  rounded-lg text-white" : "text-slate-900 dark:text-slate-100"} flex items-center justify-start  p-2`}>
          Contact 
      </Link>
    </div>
  );
}
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}



const MobileNavDrawer: FC<Props> = ({ open, setOpen }): ReactElement => {
  return (
    <Dialog open={open}>
      <Overlay className="fixed inset-0 z-50 opacity-50 bg-slate-950 dark:bg-slate-600 radix-state-open:duration-200 radix-state-open:ease-in radix-state-open:animate-in radix-state-open:fade-in-0 radix-state-closed:duration-200 radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-closed:ease-out" />
      <DialogContent
        className="fixed focus:outline-none top-0 bottom-0 left-0 flex flex-col z-50 w-[323px] bg-background dark:bg-slate-950 radix-state-open:duration-200 radix-state-open:ease-in radix-state-open:animate-in radix-state-open:slide-in-from-left radix-state-closed:duration-200 radix-state-closed:animate-out radix-state-closed:slide-out-to-left radix-state-closed:ease-out"
        onPointerDownOutside={() => setOpen(false)}
      >

        <div className="flex items-center justify-between h-[75px] px-6 border-b">
          <div className="flex items-center space-x-4">
            
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
          <button
            className="text-4xl text-slate-900 dark:text-slate-100"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col flex-1 px-6 py-4">
          <NavContent />
        </div>
        <div  className=' pt-20 flex flex-col items-center justify-center space-y-3'>
                    <Link href='/requestbuy' className='bg-green-500 w-[270px] sm:w-[300px] py-5 h-full flex items-center justify-center text-white rounded-lg font-semibold '>Request for Buy</Link>
                    <Link href='/requestpickup' className=' bg-[#13404F] w-[270px] sm:w-[300px] py-5 h-full flex items-center justify-center text-white rounded-lg font-semibold '>Request for PickUp</Link>
        </div>
        <div className="flex items-center justify-center h-[75px] px-6 border-t">
          {/* <ThemeSwitcher /> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNavDrawer;
