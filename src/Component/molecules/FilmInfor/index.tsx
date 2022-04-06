import React from "react";
import StarRate from "../../atoms/StarRate";
interface IFilmInforProps {
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
  rate: number;
}
const FilmInfor: React.FC<IFilmInforProps> = ({
  posterPath,
  title,
  overview,
  releaseDate,
  rate,
}) => {
  const datetime = (dt: string) => {
    return new Date(dt);
  };
  const pathImage = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex w-full grid-cols-2 gap-4 mt-6">
      <img src={pathImage + posterPath} alt="poster" />
      <div>
        <h1 className="text-6xl">{title}</h1>
        <p className="py-6">{overview}</p>
        <p className="">
          Ra mắt {datetime(releaseDate).toLocaleDateString("vi")}
        </p>
        <p className="">Ra mắt {releaseDate}</p>
        <StarRate star={rate} />
      </div>
    </div>
  );
};

export default FilmInfor;
