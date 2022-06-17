import React from "react";
import Heading from "../../atoms/Heading";
import ImageCard from "../../molecules/ImageCard";

interface IFilmPopularProps{
  data: {
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
  }[],
}
const FilmPopular: React.FC<IFilmPopularProps> = ({data}) => {
  const pathImage = "https://image.tmdb.org/t/p/w500";


  const renderFilm = () => {
    return data?.map((film, index) => {
      return (
        <div key={index}>
          <ImageCard
            category="movie"
            id={film.id}
            key={index}
            src={pathImage + film.backdrop_path}
            title={film.title}
            genres={""}
          />
        </div>
      );
    });
  };
  return (
    <div>
      {/* eslint-disable-next-line react/no-children-prop */}
      <Heading children="Phim phổ biến" />
      <div className="grid grid-cols-2 gap-4 p-4 mt-5 md:grid-cols-5 md:p-auto">
        {renderFilm()}
      </div>
    </div>
  );
};

export default FilmPopular;
