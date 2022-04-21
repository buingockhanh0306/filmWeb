import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import Line from "../../atoms/line";
import StarRate from "../../atoms/StarRate";
import FilmItem from "../../molecules/FilmItem";
import FilmTop from "../FilmTop";

type IFilmDetailProps = Pick<
  IFilmProps,
  "title" | "poster_path" | "vote_average" | "vote_count"
>;

const FilmWatch: React.FC<any> = ({ watchLink }) => {
  const pathImage = "https://image.tmdb.org/t/p/w500";

  const router = useRouter();
  const idFilm = router.query.filmID;
  const [rate, setRate] = useState<string>("");
  const [vote, setVote] = useState<number>(0);
  const [filmDetail, setFilmDetail] = useState<IFilmDetailProps>({
    title: "",
    vote_average: 0,
    vote_count: 0,
    poster_path: "",
  });
  const [films, setFilms] = useState<IFilmProps[]>([]);

  useEffect(() => {
    const getFilmDetail = async () => {
      const filmTrailer = await filmAPI.getFilmDetail(idFilm);
      setFilmDetail(filmTrailer.data);
      setVote(filmTrailer.data.vote_average);
    };
    getFilmDetail();
  }, []);

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getFilmRecommended(idFilm);
      setFilms(film.data.results);
    };
    getFilm();
  }, []);

  const renderRecommentFilm = () => {
    return films.map((film, index) => {
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
        width={"100%"}
        height={"480px"}
        allowFullScreen
        id="iframe"
        src={`${watchLink}`}
        frameBorder="0"
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
      <div className="flex w-full gap-12 p-4 ">
        <div className="w-3/4">
          {renderTrailer()}
          <h1 className="my-4 text-6xl text-secondColor">{filmDetail.title}</h1>
          <div className="inline-block my-4 mr-2 text-xl text-secondColor">
            Đánh giá phim
          </div>
          <span className="text-textColor">
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

        <div className="w-1/4 ">
          <h5 className="text-textColor">Phim được đề xuất</h5>
          <Line />
          {renderRecommentFilm()}
        </div>
      </div>
      <FilmTop />
    </div>
  );
};
export default FilmWatch;
