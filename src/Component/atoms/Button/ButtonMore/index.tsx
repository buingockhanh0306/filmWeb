import React from "react";
import { IButtonProps } from "../ButtonDefaut";
import { BsInfoCircle } from "react-icons/bs";

interface IButtonMoreProps extends IButtonProps {}
const ButtonMore: React.FC<IButtonMoreProps> = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center justify-around h-10 px-4 text-white bg-gray-500 rounded hover:animate-[zoomIn_1s_ease]"
      onClick={onClick}
    >
      <BsInfoCircle className="mr-4 text-xl" />
      {children}
    </button>
  );
};

export default ButtonMore;
