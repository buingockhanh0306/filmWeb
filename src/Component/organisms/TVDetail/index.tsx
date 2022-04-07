import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ITVProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";
import FilmInfor from "../../molecules/FilmInfor";

type ITVDetail = Pick<
  ITVProps,
  | "name"
  | "poster_path"
  | "release_date"
  | "overview"
  | "vote_average"
  | "vote_count"
  | "episode_run_time"
>;
const FilmDetail = () => {
  const router = useRouter();
  const [films, setFilms] = useState<ITVDetail>({
    name: "",
    poster_path: "",
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    episode_run_time: 0,
  });
  const idFilm = router.query.tvID;

  useEffect(() => {
    const getFilmDetail = async () => {
      const film = await filmAPI.getTVDetail(idFilm);
      setFilms(film.data);
      console.log(film.data);
    };
    getFilmDetail();
  }, []);

  const handleWatchFilm = () => {
    router.push(`/tv/${idFilm}/watch`);
  };

  const renderFilm = () => {
    return (
      <FilmInfor
        poster_path={films.poster_path}
        title={films.name}
        overview={films.overview}
        release_date={films.release_date}
        vote_average={films.vote_average}
        vote_count={films.vote_count}
        runtime={films.episode_run_time}
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
