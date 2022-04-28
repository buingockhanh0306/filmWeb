import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../../atoms/Heading";
import { IFilmProps, IGenresProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ImageCard from "../../molecules/ImageCard";
import { useRouter } from "next/router";

const FilmRecommended: React.FC = () => {
  function HiddenArrow() {
    return <div style={{ display: "none" }} />;
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          nextArrow: <HiddenArrow />,
          prevArrow: <HiddenArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <HiddenArrow />,
          prevArrow: <HiddenArrow />,
        },
      },
    ],
  };
  const [films, setFilms] = useState<IFilmProps[]>([]);
  const [genres, setGenres] = useState<IGenresProps[]>([]);
  const router = useRouter();
  const idFilm = router.query.filmID;

  const pathImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getFilmRecommended(idFilm);
      setFilms(film.data.results);
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
    <div>
      <Heading children="Phim liên quan" />
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
                  src={pathImage + film.backdrop_path}
                  title={film.title}
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

export default FilmRecommended;
