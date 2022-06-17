import { useRouter } from "next/router";
import React from "react";
import ButtonMore from "../../atoms/Button/ButtonMore";
import ButtonPlay from "../../atoms/Button/ButtonPlay";
import Slider from "react-slick";

interface IBannerProps{
  data: {
    id: number,
    title: string,
    overview: string,
    backdrop_path: string
  }[]
}

const Banner: React.FC<IBannerProps> = ({data}) => {
  const pathImage = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
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
  };
  return (
    <div className="p-0 m-0">
      <Slider {...settings}>
        {data?.map((film, index) => {
          return (
            <div key={index} className="relative p-0 m-0">
              <img
                alt={'image poster'}
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
                      /* eslint-disable-next-line react/no-children-prop */
                      children="Xem phim"
                    />
                  </div>
                  <ButtonMore
                    onClick={() => handleClickMore(film.id)}
                    /* eslint-disable-next-line react/no-children-prop */
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
