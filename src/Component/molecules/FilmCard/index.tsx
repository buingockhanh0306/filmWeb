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
    router.push(`/${id}`);
  };
  return (
    <div onClick={handleDetailFilm} className="flex flex-col">
      <div className="relative">
        <img
          className="flex items-center justify-center h-full rounded"
          src={src}
          alt="banner"
        />
        <ButtonCircle />
      </div>
      <h5 className="py-2 font-bold text-center cursor-pointer text-textColor hover:text-secondColor">
        {title}
      </h5>
    </div>
  );
};

export default FilmCard;
