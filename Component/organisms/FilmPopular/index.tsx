import React, { useEffect, useState } from "react";
import FilmCard from "../../molecules/FilmCard";
import filmAPI from "../../../pages/api/axios/filmAPI";
import { useRouter } from "next/router";

interface IFilmPopularProps {
  poster_path: string;
  title: string;
  id: string | number;
}
[];

const FilmPopular: React.FC = () => {
  const [films, setFilms] = useState<IFilmPopularProps[]>([]);
  const pathImage = "https://image.tmdb.org/t/p/w500";

  const getFilm: () => Promise<void> = async () => {
    const film = await filmAPI.getFilmPopular();
    setFilms(film.data.results);
    console.log(film.data.results);
  };

  useEffect(() => {
    getFilm();
  }, []);

  const renderFilm = () => {
    return films.map((film, index) => (
      <div key={index}>
        <FilmCard
          id={film.id}
          key={index}
          src={pathImage + film.poster_path}
          title={film.title}
        />
      </div>
    ));
  };
  return <div className="grid grid-cols-5 gap-4 mt-5">{renderFilm()}</div>;
};

export default FilmPopular;
