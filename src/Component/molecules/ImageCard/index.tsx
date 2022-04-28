import { useRouter } from "next/router";
import React from "react";
import ButtonCircle from "../../atoms/Button/ButtonCircle";

interface IImageCardProps {
  src: string;
  title: string;
  id: string | number;
  category: string;
  genres: string | number | string[];
}
const ImageCard: React.FC<IImageCardProps> = ({
  src,
  title,
  id,
  category,
  genres,
}) => {
  const router = useRouter();
  const handleDetailFilm = () => {
    router.push(`/${category}/${id}`);
  };
  return (
    <div onClick={handleDetailFilm} className="flex flex-col cursor-pointer">
      <div className="relative group">
        <img
          className="flex items-center justify-center h-full rounded hover:animate-[zoomIn_1s_ease]"
          src={src}
          alt="banner"
        />
        <ButtonCircle />
      </div>
      <h5 className="py-2 font-bold text-center cursor-pointer text-textColor hover:text-secondColor">
        {title}
      </h5>
      <p className="hidden text-sm text-center md:block text-textColor">
        {genres}
      </p>
    </div>
  );
};

export default ImageCard;
