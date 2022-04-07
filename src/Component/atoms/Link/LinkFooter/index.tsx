import Link from "next/link";
import React from "react";
import { ILinkProps } from "../../../../../types/IProps";

const LinkFooter: React.FC<ILinkProps> = ({ href, children }) => {
  return (
    <li className="my-2 text-sm text-left list-none">
      <a className="cursor-pointer hover:text-secondColor">{children}</a>
    </li>
  );
};

export default LinkFooter;
