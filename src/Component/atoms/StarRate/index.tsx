import React from "react";
import ReactStars from "react-stars";

interface IStarProps {
  star: number;
}
const StarRate: React.FC<IStarProps> = ({ star }) => {
  return (
    <ReactStars
      count={10}
      size={30}
      value={star}
      edit={false}
      color2={"#ffd700"}
    />
  );
};

export default StarRate;
