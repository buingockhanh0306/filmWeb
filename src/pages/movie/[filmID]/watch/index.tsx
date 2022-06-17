import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import FilmWatch from "../../../../Component/organisms/FilmWatch";
import filmAPI from "../../../api/axios/filmAPI";

const WatchFilm = () => {
  const router = useRouter();
  const idFilm = router.query.filmID;
  const [filmDetail, setFilmDetail] = useState({
    title: '',
    vote_average: 0,
    vote_count: 0
  })
  const [filmRecommended, setFilmRecommended] = useState([])
  const [filmTop, setFilmTop] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const getFilmRecommended: () => Promise<void> = async () => {
      const film = await filmAPI.getFilmRecommended(idFilm);
      setFilmRecommended(film.data.results);
    };
    getFilmRecommended();
  }, []);

  useEffect(() => {
    const getFilmTrailer = async () => {
      const filmTrailer = await filmAPI.getFilmDetail(idFilm);
      setFilmDetail(filmTrailer.data)
    };
    getFilmTrailer();
  },[]);

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getFilmTop();
      setFilmTop(film.data.results);
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

  return (
      <FilmWatch
          watchLink={`https://www.2embed.ru/embed/tmdb/movie?id=${idFilm}`}
          filmDetail={filmDetail}
          filmRecommended={filmRecommended}
          filmTop={filmTop}
          genres={genres}
      />
  );
};

export default WatchFilm;
