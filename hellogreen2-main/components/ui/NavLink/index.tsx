import Link from "next/link";
import { FC } from "react";

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink: FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <p className="cursor-pointer rounded-[100px] font-bold uppercase text-white">
        {text}
      </p>
    </Link>
  );
};

export default NavLink;
