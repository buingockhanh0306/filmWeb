import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Line from "../../atoms/line";
import StarRate from "../../atoms/StarRate";
import FilmItem from "../../molecules/FilmItem";
import FilmRecommended from "../FilmRecommended";
import FilmTop from "../FilmTop";


interface IFilmWatchProps{
  filmRecommended:{
    id: number,
    poster_path: string,
    title: string,
    vote_average: number
  }[]
  filmDetail:{
    title: string,
    vote_average: number,
    vote_count: number
  }
  filmTop:{
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
    genre_ids: number[];
  }[]
  genres:{
    name: string;
    id: number;
  }[]
  watchLink: string

}

const FilmWatch: React.FC<IFilmWatchProps> = ({ watchLink, filmDetail, filmRecommended, filmTop, genres }) => {
  const pathImage = "https://image.tmdb.org/t/p/w500";

  const router = useRouter();
  const [rate, setRate] = useState<string>("");
  const [vote, setVote] = useState<number>(0);

  const renderRecommentFilm = () => {
    return filmRecommended.map((film, index) => {
      return index < 10 ? (
        <FilmItem
          key={index}
          id={film.id}
          poster_path={pathImage + film.poster_path}
          title={film.title}
          vote_average={film.vote_average}
        />
      ) : (
        ""
      );
    });
  };

  const renderTrailer = () => {
    return (
      <iframe
        allowFullScreen
        id="iframe"
        src={watchLink}
        className="w-max mx-auto h-auto md:w-full md:h-96"
      ></iframe>
    );
  };

  const handleRate = (value: number) => {
    setVote(value);
    switch (value) {
      case 0.5:
      case 1:
        setRate("Dở tệ");
        break;
      case 1.5:
      case 2:
        setRate("Dở");
        break;
      case 2.5:
      case 3:
        setRate("Không hay");
        break;
      case 3.5:
      case 4:
        setRate("Không hay lắm");
        break;
      case 4.5:
      case 5:
        setRate("Bình thường");
        break;
      case 5.5:
      case 6:
        setRate("Xem được");
        break;
      case 6.5:
      case 7:
        setRate("Có vẻ hay");
        break;
      case 7.5:
      case 8:
        setRate("Hay");
        break;
      case 8.5:
      case 9:
        setRate("Rất hay");
        break;
      case 9.5:
      case 10:
        setRate("Hay tuyệt");
        break;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex w-full gap-0 p-4 md:gap-12 ">
        <div className="w-3/4">
          {renderTrailer()}
          <h1 className="my-4 text-2xl md:text-6xl text-secondColor">
            {filmDetail.title}
          </h1>
          <div className="block mr-2 text-xl md:inline-block md:my-4 text-secondColor">
            Đánh giá phim
          </div>
          <span className="block my-2 text-textColor md:my-0 md:inline-block">
            ({filmDetail.vote_average}
            <AiFillStar className="inline mx-1 mb-1 text-starColor" />/
            {filmDetail.vote_count} lượt bình chọn)
          </span>
          <StarRate
            edit={true}
            size={18}
            star={vote}
            onChange={(e: number) => handleRate(e)}
          />
          <p className="my-4 text-textColor">{rate}</p>
        </div>

        <div className="hidden w-full md:w-1/4 md:block">
          <h5 className="text-textColor">Phim được đề xuất</h5>
          <Line />
          {renderRecommentFilm()}
        </div>
      </div>
      <FilmTop filmData={filmTop} genresData={genres}/>
      <FilmRecommended />
    </div>
  );
};
export default FilmWatch;
