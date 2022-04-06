import React from "react";
import { FaPlay } from "react-icons/fa";

const ButtonCircle = () => {
  return (
    <div className="absolute flex items-center justify-center w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 left-1/2 bg-secondColor hover:bg-opacity-70">
      <FaPlay className="text-textColor" />
    </div>
  );
};

export default ButtonCircle;
