import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import filmAPI from "../../../pages/api/axios/filmAPI";
import Button from "../../atoms/Button/ButtonDefaut";
import Heading from "../../atoms/Heading";

interface IFilmTrailerProps {
  name: string;
  key: string;
}
const FilmWatch = () => {
  const router = useRouter();
  const idFilm = router.query.filmID;
  const [filmTrailers, setFilmTrailers] = useState<string>("");

  useEffect(() => {
    const getFilmDetail = async () => {
      const filmTrailer = await filmAPI.getFilmDetail(idFilm);
      setFilmTrailers(filmTrailer.data.videos.results[0].key);
      // console.log(filmTrailer.data.videos.results);
    };
    getFilmDetail();
  }, []);

  console.log(filmTrailers);

  const renderTrailer = () => {
    return (
      <iframe
        width={"100%"}
        height={"400px"}
        src={`https://www.youtube.com/embed/${filmTrailers}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };
  return <div className="container w-full p-4 mx-auto">{renderTrailer()}</div>;
};

export default FilmWatch;
