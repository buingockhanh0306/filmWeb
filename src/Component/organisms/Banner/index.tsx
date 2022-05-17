import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonMore from "../../atoms/Button/ButtonMore";
import ButtonPlay from "../../atoms/Button/ButtonPlay";
import Slider from "react-slick";
import ClipLoader from "react-spinners/ClipLoader";

type IBannerProps = Pick<
  IFilmProps,
  "id" | "title" | "overview" | "backdrop_path"
>;

const Banner: React.FC = () => {
  const pathImage = "https://image.tmdb.org/t/p/original";
  const router = useRouter();

  const [films, setFilms] = useState<IBannerProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getFilmDetail = async () => {
      const film = await filmAPI.getFilmPopular();
      setFilms(film.data.results);
    };
    getFilmDetail();
    setLoading(false);
  }, []);
  const handleClickWatch = (id: number) => {
    router.push(`movie/${id}/watch`);
  };
  const handleClickMore = (id: number) => {
    router.push(`movie/${id}`);
  };
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    // cssEase: "linear",
  };
  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#D78536" loading={loading} size={60} />
    </div>
  ) : (
    <div className="p-0 m-0">
      <Slider {...settings}>
        {films.map((film, index) => {
          return (
            <div className="relative p-0 m-0">
              <img
                width="100%"
                height="100vh"
                src={pathImage + film.backdrop_path}
              />
              <div className="absolute hidden w-1/2 md:block text-textColor bottom-44 left-10">
                <h1 className="text-4xl md:text-6xl">{film.title}</h1>
                <p className="my-6">{film.overview}</p>
                <div className="flex">
                  <div className="mr-4">
                    <ButtonPlay
                      onClick={() => handleClickWatch(film.id)}
                      children="Xem phim"
                    />
                  </div>
                  <ButtonMore
                    onClick={() => handleClickMore(film.id)}
                    children="Chi tiết"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
