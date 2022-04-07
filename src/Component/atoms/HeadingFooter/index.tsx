import React from "react";

interface IHeadingFooterProps {
  children: string;
}
const HeadingFooter: React.FC<IHeadingFooterProps> = ({ children }) => {
  return <h5 className="mb-4 text-lg text-left">{children}</h5>;
};

export default HeadingFooter;
