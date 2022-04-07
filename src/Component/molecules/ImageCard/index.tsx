import { useRouter } from "next/router";
import React from "react";

interface IImageCardProps {
  src: string;
  title: string;
  id: string | number;
  category: string;
}
const ImageCard: React.FC<IImageCardProps> = ({ src, title, id, category }) => {
  const router = useRouter();
  const handleDetailFilm = () => {
    router.push(`/${category}/${id}`);
  };
  return (
    <div onClick={handleDetailFilm} className="flex flex-col cursor-pointer">
      <div className="relative">
        <img
          className="flex items-center justify-center h-full rounded hover:animate-[zoomIn_1s_ease]"
          src={src}
          alt="banner"
        />
      </div>
      <h5 className="py-2 font-bold text-center cursor-pointer text-textColor hover:text-secondColor">
        {title}
      </h5>
    </div>
  );
};

export default ImageCard;
