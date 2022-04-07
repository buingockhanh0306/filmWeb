import React from "react";
import Line from "../line";

interface IHeadingProps {
  children: string;
}
const Heading: React.FC<IHeadingProps> = ({ children }) => {
  return (
    <div>
      <h1 className="mt-12 mb-6 text-4xl text-textColor text-700">
        {children}
      </h1>
      <Line />
    </div>
  );
};

export default Heading;
