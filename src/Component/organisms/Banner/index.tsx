import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonMore from "../../atoms/Button/ButtonMore";
import ButtonPlay from "../../atoms/Button/ButtonPlay";

type IBannerProps = Pick<
  IFilmProps,
  "id" | "title" | "overview" | "backdrop_path"
>;

const Banner: React.FC = () => {
  const pathImage = "https://image.tmdb.org/t/p/w500";
  const router = useRouter();

  const [films, setFilms] = useState<IBannerProps>({
    id: 0,
    title: "",
    overview: "",
    backdrop_path: "",
  });
  useEffect(() => {
    const getFilmDetail = async () => {
      const film = await filmAPI.getFilmTop();
      setFilms(film.data.results[0]);
      console.log(film.data.results[0]);
    };
    getFilmDetail();
  }, []);
  const handleClickWatch = () => {
    router.push(`movie/${films.id}/watch`);
  };
  const handleClickMore = () => {
    router.push(`movie/${films.id}`);
  };
  return (
    <div className="relative">
      <img width="100%" height="100vh" src={pathImage + films.backdrop_path} />
      <div className="absolute w-1/2 text-textColor bottom-44 left-10">
        <h1 className="text-6xl ">{films.title}</h1>
        <p className="my-6">{films.overview}</p>
        <div className="flex">
          <div className="mr-4">
            <ButtonPlay onClick={() => handleClickWatch()} children="Watch" />
          </div>
          <ButtonMore onClick={() => handleClickMore()} children="More Info" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
