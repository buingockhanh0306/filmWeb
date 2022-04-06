import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";

export interface IFilmDetailProps {
  id: number | string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}
const FilmDetail = () => {
  const router = useRouter();
  const [films, setFilms] = useState<IFilmDetailProps>({
    id: "",
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
  });
  const idFilm = router.query.filmID;
  const pathImage = "https://image.tmdb.org/t/p/w500";
  const datetime = (dt: string) => {
    return new Date(dt);
  };
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
      <div className="flex w-full grid-cols-2 gap-4 mt-6">
        <img src={pathImage + films.poster_path} alt="poster" />
        <div>
          <h1 className="text-6xl">{films.title}</h1>
          <p className="py-6">{films.overview}</p>
          <p className="">
            Ra mắt {datetime(films.release_date).toLocaleDateString("vi")}
          </p>
          <p className="">Ra mắt {films.release_date}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid gap-4 text-textColor">
      {renderFilm()}
      <ButtonDefault onClick={() => handleWatchFilm()} children="Xem phim" />
    </div>
  );
};

export default FilmDetail;
