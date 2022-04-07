import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";
import StarRate from "../../atoms/StarRate";
import FilmInfor from "../../molecules/FilmInfor";

type IFilmDetail = Omit<IFilmProps, "id" | "backdrop_path">;
const FilmDetail = () => {
  const router = useRouter();
  const [films, setFilms] = useState<IFilmDetail>({
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
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
    router.push(`/movie/${idFilm}/watch`);
  };

  const renderFilm = () => {
    return (
      <FilmInfor
        poster_path={films.poster_path}
        title={films.title}
        overview={films.overview}
        release_date={films.release_date}
        vote_average={films.vote_average}
        vote_count={films.vote_count}
        runtime={films.runtime}
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
