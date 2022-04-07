import { useRouter } from "next/router";
import React from "react";
import ButtonCircle from "../../atoms/Button/ButtonCircle";

interface IFilmCardProps {
  src: string;
  title: string;
  id: string | number;
}
const FilmCard: React.FC<IFilmCardProps> = ({ src, title, id }) => {
  const router = useRouter();
  const handleDetailFilm = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div onClick={handleDetailFilm} className="flex flex-col cursor-pointer">
      <div className="relative">
        <img
          className="flex items-center justify-center h-full rounded hover:animate-[zoomIn_1s_ease]"
          src={src}
          alt="banner"
        />
        {/* <ButtonCircle /> */}
      </div>
      <h5 className="py-2 font-bold text-center cursor-pointer text-textColor hover:text-secondColor">
        {title}
      </h5>
    </div>
  );
};

export default FilmCard;
