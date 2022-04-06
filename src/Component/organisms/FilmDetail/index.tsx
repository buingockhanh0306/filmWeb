import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";
import StarRate from "../../atoms/StarRate";
import FilmInfor from "../../molecules/FilmInfor";
export interface IFilmDetailProps {
  id: number | string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}
const FilmDetail = () => {
  const router = useRouter();
  const [films, setFilms] = useState<IFilmDetailProps>({
    id: "",
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
    vote_average: 0,
  });
  const idFilm = router.query.filmID;

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
    console.log(films.vote_average);

    return (
      <FilmInfor
        posterPath={films.poster_path}
        title={films.title}
        overview={films.overview}
        releaseDate={films.release_date}
        rate={films.vote_average}
      />
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
