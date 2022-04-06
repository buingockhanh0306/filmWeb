import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import filmAPI from "../../../pages/api/axios/filmAPI";
import Button from "../../atoms/Button";

export interface IFilmDetailProps {
  id: number | string;
  title: string;
  poster_path: string;
}
const FilmDetail = () => {
  const router = useRouter();
  const [films, setFilms] = useState<IFilmDetailProps>({
    id: "",
    title: "",
    poster_path: "",
  });
  const idFilm = router.query.filmID;
  const pathImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getFilmDetail = async () => {
      const film = await filmAPI.getFilmDetail(idFilm);
      setFilms(film.data);
      console.log(film.data);
    };
    getFilmDetail();
  }, []);

  const handleWatchFilm = () => {
    router.push(`/${idFilm}/watch`);
  };

  const renderFilm = () => {
    return (
      <div>
        <p>{films.id}</p>
        <p>{films.title}</p>
        <p>{films.poster_path}</p>
      </div>
    );
  };

  return (
    <div>
      <div>trang film detail {idFilm}</div>
      {renderFilm()}
      <Button onClick={() => handleWatchFilm()} children="Xem phim" />
    </div>
  );
};

export default FilmDetail;
