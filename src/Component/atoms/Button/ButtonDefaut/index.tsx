import React from "react";

export interface IButtonProps {
  children: string;
  onClick?: any;
}
const ButtonDefault: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="h-10 px-4 text-white rounded bg-secondColor w-30"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;
