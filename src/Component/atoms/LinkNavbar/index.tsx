import Link from "next/link";
import React from "react";

interface ILinkProps {
  children: string;
  href: string;
}
const LinkNavbar: React.FC<ILinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <li className="mx-10 cursor-pointer hover:text-secondColor">
        {children}
      </li>
    </Link>
  );
};

export default LinkNavbar;
