import React, { useEffect, useState } from "react";
import { IFilmProps, IGenresProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import Heading from "../../atoms/Heading";
import Line from "../../atoms/line";
import ImageCard from "../../molecules/ImageCard";

type IFilmPopularProps = Pick<
  IFilmProps,
  "poster_path" | "title" | "id" | "backdrop_path" | "genre_ids"
>;
const FilmPopular: React.FC = () => {
  const [films, setFilms] = useState<IFilmPopularProps[]>([]);
  const [genres, setGenres] = useState<IGenresProps[]>([]);
  const pathImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getFilmPopular();
      setFilms(film.data.results);
    };
    getFilm();
  }, []);

  useEffect(() => {
    const getGenres = async () => {
      const genre = await filmAPI.getGenres();
      setGenres(genre.data.genres);
    };
    getGenres();
  }, []);

  const renderFilm = () => {
    return films.map((film, index) => {
      const arrGenreID = film.genre_ids.map((i) => i);
      const arrGenres: string[] = [];
      genres.map((genre) => {
        for (let i = 0; i < arrGenreID.length; i++) {
          genre.id == arrGenreID[i] ? arrGenres.push(genre.name) : null;
        }
      });
      return (
        <div key={index}>
          <ImageCard
            category="movie"
            id={film.id}
            key={index}
            src={pathImage + film.backdrop_path}
            title={film.title}
            genres={arrGenres.join(" / ")}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <Heading children="Phim phổ biến" />
      <div className="grid grid-cols-5 gap-4 mt-5">{renderFilm()}</div>
    </div>
  );
};

export default FilmPopular;
