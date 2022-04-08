import React from "react";
import { IFilmProps } from "../../../../types/IProps";
import StarRate from "../../atoms/StarRate";
import { AiFillStar } from "react-icons/ai";

type IFilmInForProps = Omit<IFilmProps, "id" | "backdrop_path" | "genre_ids">;
const FilmInfor: React.FC<IFilmInForProps> = ({
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
  vote_count,
  runtime,
  name,
}) => {
  const datetime = (dt: string) => {
    return new Date(dt);
  };
  const pathImage = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex w-full grid-cols-2 gap-4 mt-6">
      <img className="rounded" src={pathImage + poster_path} alt="poster" />
      <div>
        <h1 className="text-6xl">{title}</h1>
        <p className="py-6">{name}</p>
        <p className="mt-4">Thời lượng: {runtime} phút</p>
        <p className="py-6">{overview}</p>
        <p className="">
          Ra mắt {datetime(release_date).toLocaleDateString("vi")}
        </p>
        <StarRate star={vote_average} />
        <span>
          ({vote_average}
          <AiFillStar className="inline mx-1 mb-1 text-starColor" />/
          {vote_count} lượt đánh giá)
        </span>
      </div>
    </div>
  );
};

export default FilmInfor;
