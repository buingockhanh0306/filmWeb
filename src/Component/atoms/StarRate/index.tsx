import React from "react";
import ReactStars from "react-stars";

interface IStarProps {
  star: number;
  size: number;
}
const StarRate: React.FC<IStarProps> = ({ star, size }) => {
  return (
    <ReactStars
      count={10}
      size={size}
      value={star}
      edit={false}
      color2={"#ffd700"}
    />
  );
};

export default StarRate;
