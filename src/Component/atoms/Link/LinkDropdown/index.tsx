import React from "react";
import { ILinkProps } from "../../../../../types/IProps";

type ILinkDropDownProps = Pick<ILinkProps, "children">;

const LinkDropdown: React.FC<ILinkDropDownProps> = ({ children }) => {
  return <li className="my-4 text-sm hover:text-secondColor">{children}</li>;
};

export default LinkDropdown;
