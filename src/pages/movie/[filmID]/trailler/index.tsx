import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FilmWatch from "../../../../Component/organisms/FilmWatch";
import filmAPI from "../../../api/axios/filmAPI";

const Trailler = () => {
  const router = useRouter();
  const idFilm = router.query.filmID;
  const [filmTrailers, setFilmTrailers] = useState<string>("");

  useEffect(() => {
    const getFilmDetail = async () => {
      const filmTrailer = await filmAPI.getFilmDetail(idFilm);
      setFilmTrailers(filmTrailer.data.videos.results[0].key);
    };
    getFilmDetail();
  }, []);

  return (
    <FilmWatch watchLink={`https://www.youtube.com/embed/${filmTrailers}`} />
  );
};

export default Trailler;
