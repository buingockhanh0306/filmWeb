import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonPlay from "../../atoms/Button/ButtonPlay";
import ButtonTrailer from "../../atoms/Button/ButtonTrailer";
import ImagePoster from "../../atoms/ImagePoster";
import FilmInfor from "../../molecules/FilmInfor";
import FilmCredits from "../../molecules/FilmCredits";

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

  const renderCredit = () => {
    return filmCredits.map((cre, index) => {
      return cre.profile_path !== null && index < 8 ? (
        <FilmCredits
          name={cre.name}
          profile_path={image_path + cre.profile_path}
          character={cre.character}
        />
      ) : (
        ""
      );
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
    <div className="flex gap-8 p-4 text-textColor">
      <ImagePoster poster_path={films.poster_path} />
      <div>
        {renderFilm()}
        <div className="flex justify-between mt-4 w-72">
          <ButtonPlay onClick={() => handleWatchFilm()} children="Watch" />
          <ButtonTrailer onClick={() => handleWatchFilm()} children="Trailer" />
        </div>
        <div className="grid w-full grid-cols-2 mt-4">{renderCredit()}</div>
      </div>
    </div>
  );
};

export default FilmDetail;
