import { useRouter } from "next/router";
import React from "react";
import ButtonCircle from "../../atoms/Button/ButtonCircle";

interface ITVCardProps {
  src: string;
  name: string;
  id: string | number;
}
const TVCard: React.FC<ITVCardProps> = ({ src, name, id }) => {
  const router = useRouter();
  const handleDetailTV = () => {
    router.push(`/tv/${id}`);
  };
  return (
    <div onClick={handleDetailTV} className="flex flex-col cursor-pointer">
      <div className="relative">
        <img
          className="flex items-center justify-center h-full rounded hover:animate-[zoomIn_1s_ease]"
          src={src}
          alt="banner"
        />
      </div>
      <h5 className="py-2 font-bold text-center cursor-pointer text-textColor hover:text-secondColor">
        {name}
      </h5>
    </div>
  );
};

export default TVCard;
