import React from "react";
import { IFilmProps } from "../../../../types/IProps";
import StarRate from "../../atoms/StarRate";
import { AiFillStar } from "react-icons/ai";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";

type IFilmInForProps = Pick<
  IFilmProps,
  | "title"
  | "overview"
  | "release_date"
  | "vote_average"
  | "vote_count"
  | "runtime"
  | "name"
>;
const FilmInfor: React.FC<IFilmInForProps> = ({
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
  return (
    <div>
      <h1 className="text-6xl text-secondColor">{title}</h1>
      <p className="py-6">Genres: {name}</p>
      <p className="">
        Release {datetime(release_date).toLocaleDateString("en")}
      </p>
      <p className="mt-4">Time: {runtime} minutes</p>
      <p className="py-6">{overview}</p>
      <StarRate size={30} star={vote_average} />
      <span>
        ({vote_average}
        <AiFillStar className="inline mx-1 mb-1 text-starColor" />/{vote_count}{" "}
        reviews)
      </span>
    </div>
  );
};

export default FilmInfor;
