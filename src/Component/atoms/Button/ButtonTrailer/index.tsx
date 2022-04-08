import React from "react";
import { IButtonProps } from "../ButtonDefaut";
import { IoLogoYoutube } from "react-icons/io";

interface IButtonTrailerProps extends IButtonProps {}
const ButtonTrailer: React.FC<IButtonTrailerProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className="flex items-center justify-around h-10 px-4 text-white rounded bg-secondColor hover:animate-[zoomIn_1s_ease]"
      onClick={onClick}
      {...props}
    >
      <IoLogoYoutube className="mr-4 text-xl" />
      {children}
    </button>
  );
};

export default ButtonTrailer;
