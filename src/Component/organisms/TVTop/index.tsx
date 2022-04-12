import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../../atoms/Heading";
import { IFilmProps, IGenresProps, ITVProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ImageCard from "../../molecules/ImageCard";

const TVTop: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const [films, setFilms] = useState<ITVProps[]>([]);
  const [genres, setGenres] = useState<IGenresProps[]>([]);

  const pathImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getTVTop();
      setFilms(film.data.results);
    };
    getFilm();
  }, []);

  useEffect(() => {
    const getGenres = async () => {
      const genre = await filmAPI.getGenresTV();
      setGenres(genre.data.genres);
    };
    getGenres();
  }, []);

  return (
    <div>
      <Heading children="TV Top Rated" />
      <Slider {...settings} className="grid grid-cols-5">
        {films.map((film, index) => {
          const arrGenreID = film.genre_ids.map((i) => i);
          const arrGenres: string[] = [];
          genres.map((genre) => {
            for (let i = 0; i < arrGenreID.length; i++) {
              genre.id == arrGenreID[i] ? arrGenres.push(genre.name) : null;
            }
          });
          return (
            <div key={index}>
              <div className="mx-2 my-4">
                <ImageCard
                  category="movie"
                  id={film.id}
                  key={index}
                  src={pathImage + film.backdrop_path}
                  title={film.name}
                  genres={arrGenres.join(" / ")}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TVTop;
