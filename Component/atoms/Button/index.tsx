import React from "react";

interface IButtonProps {
  children: string;
  onClick?: any;
}
const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="h-10 px-4 text-white bg-red-500 rounded w-30"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
