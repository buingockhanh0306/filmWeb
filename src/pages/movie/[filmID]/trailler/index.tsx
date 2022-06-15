import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FilmWatch from "../../../../Component/organisms/FilmWatch";
import filmAPI from "../../../api/axios/filmAPI";

const Trailer = () => {
  const router = useRouter();
  const idFilm = router.query.filmID;
  const [filmTrailers, setFilmTrailers] = useState<string>("");

  useEffect(() => {
    const getFilmDetail = async () => {
      const filmTrailer = await filmAPI.getFilmDetail(idFilm);
      // console.log(filmTrailer.data.videos);
      setFilmTrailers(filmTrailer?.data?.videos);
    };
    getFilmDetail();
  },[]);
  console.log(filmTrailers);

  return (
    <FilmWatch watchLink={`https://www.youtube.com/embed/${filmTrailers}`} />
  );
};

export default Trailer;
