import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonPlay from "../../atoms/Button/ButtonPlay";
import ButtonTrailer from "../../atoms/Button/ButtonTrailer";
import ImagePoster from "../../atoms/ImagePoster";
import FilmInfor from "../../molecules/FilmInfor";
import Slider from "react-slick";

import FilmCredits from "../../molecules/FilmCredits";
import Heading from "../../atoms/Heading";

type IFilmDetail = Pick<
  IFilmProps,
  | "title"
  | "overview"
  | "poster_path"
  | "release_date"
  | "vote_average"
  | "vote_count"
  | "runtime"
  | "name"
>;
type IGenre = Pick<IFilmProps, "name">;
type IFilmCredit = Pick<IFilmProps, "name" | "profile_path" | "character">;
const FilmDetail = () => {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const router = useRouter();
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [filmCredits, setFilmCredits] = useState<IFilmCredit[]>([]);
  const [films, setFilms] = useState<IFilmDetail>({
    title: "",
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    name: "",
    poster_path: "",
  });
  const idFilm = router.query.filmID;

  useEffect(() => {
    const getFilmCredits = async () => {
      const film = await filmAPI.getFilmCredits(idFilm);
      setFilmCredits(film.data.cast);
      console.log(film.data.cast);
    };
    getFilmCredits();
  }, []);

  useEffect(() => {
    const getFilmDetail = async () => {
      const film = await filmAPI.getFilmDetail(idFilm);
      setFilms(film.data);
      setGenres(film.data.genres);
    };
    getFilmDetail();
  }, []);

  const handleWatchFilm = () => {
    router.push(`/movie/${idFilm}/watch`);
  };
  const handleWatchTrailler = () => {
    router.push(`/movie/${idFilm}/trailler`);
  };

  const renderCredit = () => {
    return filmCredits.map((cre, index) => {
      if (index < 5) {
        return (
          <div className="">
            <FilmCredits
              name={cre.name}
              profile_path={image_path + cre.profile_path}
              character={cre.character}
            />
          </div>
        );
      }
    });
  };
  const renderFilm = () => {
    return (
      <FilmInfor
        title={films.title}
        overview={films.overview}
        release_date={films.release_date}
        vote_average={films.vote_average}
        vote_count={films.vote_count}
        runtime={films.runtime}
        name={genres.map((genre) => genre.name).join(" / ")}
      />
    );
  };

  return (
    <div className="container h-full mx-auto">
      <div className="flex flex-col gap-8 p-4 md:flex-row text-textColor">
        <ImagePoster poster_path={films.poster_path} />
        <div>
          {renderFilm()}
          <div className="fixed bottom-0 left-0 z-10 flex justify-around w-full p-4 mt-4 md:relative bg-primaryColor md:bg-transparent md:w-96 md:justify-between md:flex">
            <ButtonPlay onClick={() => handleWatchFilm()} children="Xem phim" />
            <ButtonTrailer
              onClick={() => handleWatchTrailler()}
              children="Xem trailer"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Heading children="Các diễn viên chính" />
        <div className="grid grid-cols-5">{renderCredit()}</div>
      </div>
    </div>
  );
};

export default FilmDetail;
