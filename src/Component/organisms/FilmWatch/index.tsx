import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import YouTube from "react-youtube";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import Button from "../../atoms/Button/ButtonDefaut";
import Heading from "../../atoms/Heading";
import StarRate from "../../atoms/StarRate";
import FilmItem from "../../molecules/FilmItem";
import FilmReview from "../FilmReview";

interface IFilmTrailerProps {
  name: string;
  key: string;
}
const FilmWatch = () => {
  const pathImage = "https://image.tmdb.org/t/p/w500";

  const router = useRouter();
  const idFilm = router.query.filmID;
  const [filmTrailers, setFilmTrailers] = useState<string>("");
  const [films, setFilms] = useState<IFilmProps[]>([]);

  useEffect(() => {
    const getFilmDetail = async () => {
      const filmTrailer = await filmAPI.getFilmDetail(idFilm);
      setFilmTrailers(filmTrailer.data.videos.results[0].key);
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
      return index < 8 ? (
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
        src={`https://www.youtube.com/embed/${filmTrailers}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };
  return (
    <div className="container flex w-full gap-4 p-4 mx-auto">
      <div className="w-2/3">
        {renderTrailer()}
        {/* <FilmReview /> */}
      </div>

      <div className="w-1/3 ">{renderRecommentFilm()}</div>
    </div>
  );
};

export default FilmWatch;
