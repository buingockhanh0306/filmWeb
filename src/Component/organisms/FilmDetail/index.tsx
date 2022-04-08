import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";
import StarRate from "../../atoms/StarRate";
import FilmInfor from "../../molecules/FilmInfor";

type IFilmDetail = Omit<IFilmProps, "id" | "backdrop_path" | "genre_ids">;
type IGenre = Pick<IFilmProps, "name">;
const FilmDetail = () => {
  const router = useRouter();
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [films, setFilms] = useState<IFilmDetail>({
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    name: "",
  });
  const idFilm = router.query.filmID;

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
        name={genres.map((genre) => genre.name).join(" / ")}
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
