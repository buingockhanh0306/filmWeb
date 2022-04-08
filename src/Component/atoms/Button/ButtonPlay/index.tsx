import React from "react";
import { IButtonProps } from "../ButtonDefaut";
import { FaRegPlayCircle } from "react-icons/fa";

interface IButtonPlayProps extends IButtonProps {}
const ButtonPlay: React.FC<IButtonPlayProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className="flex items-center justify-around h-10 px-4 text-white rounded bg-lime-800 hover:animate-[zoomIn_1s_ease]"
      onClick={onClick}
      {...props}
    >
      <FaRegPlayCircle className="mr-4 text-xl" />
      {children}
    </button>
  );
};

export default ButtonPlay;
