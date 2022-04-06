import { useRouter } from "next/router";
import React from "react";

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
    <div
      onClick={handleDetailFilm}
      className="flex flex-col border-2 cursor-pointer border-borderColor bg-cardColor"
    >
      <img className="h-full" src={src} alt="banner" />
      <h5 className="py-2 font-bold text-center text-textColor">{title}</h5>
    </div>
  );
};

export default FilmCard;
