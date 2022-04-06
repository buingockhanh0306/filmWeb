import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import filmAPI from "../../../pages/api/axios/filmAPI";
import Button from "../../atoms/Button";

interface IFilmWatchProps {
  id: number | string;
  title: string;
  poster_path: string;
  status: string;
}
const FilmWatch = () => {
  const router = useRouter();
  const idFilm = router.query.filmID;
  const [films, setFilms] = useState<IFilmWatchProps>({
    id: "",
    title: "",
    poster_path: "",
    status: "",
  });

  useEffect(() => {
    const getFilmDetail = async () => {
      const film = await filmAPI.getFilmDetail(idFilm);
      setFilms(film.data);
      console.log(film.data);
    };
    getFilmDetail();
  }, []);

  return (
    <div>
      <div>trang xem phim {films.id}</div>
      <div>{films.title}</div>
      <div>{films.poster_path}</div>
      <div>{films.status}</div>
    </div>
  );
};

export default FilmWatch;
