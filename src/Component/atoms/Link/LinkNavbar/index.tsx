import Link from "next/link";
import React from "react";
import { ILinkProps } from "../../../../../types/IProps";

const LinkNavbar: React.FC<ILinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <li className="mx-4 cursor-pointer hover:text-secondColor">{children}</li>
    </Link>
  );
};

export default LinkNavbar;
