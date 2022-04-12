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
        <AiFillStar className="inline mx-1 mb-1 text-starColor" />/{vote_count}{" "}
        lượt đánh giá)
      </span>
    </div>
  );
};

export default FilmInfor;
