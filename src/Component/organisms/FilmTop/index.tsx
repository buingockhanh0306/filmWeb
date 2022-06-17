import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../../atoms/Heading";
import ImageCard from "../../molecules/ImageCard";

interface IFilmTopProps{
  filmData: {
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
    genre_ids: number[];
  }[],
  genresData:{
    name: string;
    id: number;
  }[]
}
const FilmTop: React.FC<IFilmTopProps> = ({filmData, genresData}): JSX.Element => {
  function HiddenArrow() {
    return <div style={{ display: "none" }} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
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


  const pathImage = "https://image.tmdb.org/t/p/w500";



  return (
    <div>
      {/* eslint-disable-next-line react/no-children-prop */}
      <Heading children="Top Phim" />
      <Slider {...settings} className="grid grid-cols-5">
        {filmData.map((film, index) => {
          const arrGenreID = film.genre_ids.map((i) => i);
          const arrGenres: string[] = [];
          genresData.map((genre) => {
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

export default FilmTop;
