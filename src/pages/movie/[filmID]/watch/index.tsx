import { useRouter } from "next/router";
import React from "react";
import FilmWatch from "../../../../Component/organisms/FilmWatch";

const WatchFilm = () => {
  const router = useRouter();
  const idFilm = router.query.filmID;
  return (
    <FilmWatch
      watchLink={`https://www.2embed.ru/embed/tmdb/movie?id=${idFilm}`}
    />
  );
};

export default WatchFilm;
