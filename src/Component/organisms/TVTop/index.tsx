import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../../atoms/Heading";
import { IFilmProps, ITVProps } from "../../../../types/IProps";
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
  const pathImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getTVTop();
      setFilms(film.data.results);
      console.log(film.data);
    };
    getFilm();
  }, []);
  return (
    <div>
      <Heading children="TV Top Rated" />
      <Slider {...settings} className="grid grid-cols-5">
        {films.map((film, index) => (
          <div>
            <div key={index} className="mx-2 my-4">
              <ImageCard
                category="tv"
                id={film.id}
                key={index}
                src={pathImage + film.backdrop_path}
                title={film.name}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TVTop;
