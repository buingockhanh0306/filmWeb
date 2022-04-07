import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import Heading from "../../atoms/Heading";
import Line from "../../atoms/line";
import ImageCard from "../../molecules/ImageCard";

type IFilmPopularProps = Pick<
  IFilmProps,
  "poster_path" | "title" | "id" | "backdrop_path"
>;

const FilmPopular: React.FC = () => {
  const [films, setFilms] = useState<IFilmPopularProps[]>([]);
  const pathImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getFilmPopular();
      setFilms(film.data.results);
    };
    getFilm();
  }, []);

  const renderFilm = () => {
    return films.map((film, index) => (
      <div key={index}>
        <ImageCard
          category="movie"
          id={film.id}
          key={index}
          src={pathImage + film.backdrop_path}
          title={film.title}
        />
      </div>
    ));
  };
  return (
    <div>
      <Heading children="Film Popular" />
      <div className="grid grid-cols-5 gap-4 mt-5">{renderFilm()}</div>
    </div>
  );
};

export default FilmPopular;
