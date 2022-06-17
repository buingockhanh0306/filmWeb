import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FilmWatch from "../../../../Component/organisms/FilmWatch";
import filmAPI from "../../../api/axios/filmAPI";

const Trailer: React.FC = (): JSX.Element => {
  const router = useRouter();
  const idFilm = router.query.filmID;
  const [filmTrailers, setFilmTrailers] = useState("");
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
      setFilmTrailers(filmTrailer?.data?.videos?.results[0]?.key);
    };
    getFilmTrailer();
  },[]);
  console.log(filmTrailers);

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
        watchLink={`https://www.youtube.com/embed/${filmTrailers}`}
        filmDetail={filmDetail}
        filmRecommended={filmRecommended}
        filmTop={filmTop}
        genres={genres}
    />
  );
};

export default Trailer;
