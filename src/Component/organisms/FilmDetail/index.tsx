import { useRouter } from "next/router";
import React from "react";
import ButtonPlay from "../../atoms/Button/ButtonPlay";
import ButtonTrailer from "../../atoms/Button/ButtonTrailer";
import ImagePoster from "../../atoms/ImagePoster";
import FilmInfor from "../../molecules/FilmInfor";

import FilmCredits from "../../molecules/FilmCredits";
import Heading from "../../atoms/Heading";

interface IFilmDetailProps{
  filmDetail:{
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
    vote_count: number,
    vote_average: number,
    release_date: string,
    runtime: number,
    homepage: string,
    poster_path: string,
    genres:{
      name: string
    }[]
  }
  filmCredits:{
    name: string,
    profile_path: string,
    character: string
  }[]
}


const FilmDetail: React.FC<IFilmDetailProps> = ({filmDetail, filmCredits}) => {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const router = useRouter();

  const idFilm = router.query.filmID;

  const handleWatchFilm = () => {
    router.push(`/movie/${idFilm}/watch`);
  };
  const handleWatchTrailler = () => {
    router.push(`/movie/${idFilm}/trailler`);
  };

  const renderCredit = () => {
    return filmCredits.map((cre, index) => {
      if (index < 8) {
        return (
          <div key={index}>
            <FilmCredits
              name={cre.name}
              profile_path={image_path + cre.profile_path}
              character={cre.character}
            />
          </div>
        );
      }
    });
  };
  const renderFilm = () => {
    return (
      <FilmInfor
        title={filmDetail.title}
        overview={filmDetail.overview}
        release_date={filmDetail.release_date}
        vote_average={filmDetail.vote_average}
        vote_count={filmDetail.vote_count}
        runtime={filmDetail.runtime}
        name={filmDetail?.genres?.map((genre) => genre.name).join(" / ")}
      />
    );
  };

  return (
    <div className="container h-full mx-auto">
      <div className="flex flex-col gap-8 p-4 md:flex-row text-textColor">
        <ImagePoster poster_path={filmDetail.poster_path} />
        <div>
          {renderFilm()}
          <p className="my-4">
            Link nhà phát hành:{" "}
            <a className="text-secondColor" href={filmDetail.homepage}>
              {filmDetail.homepage}
            </a>
          </p>
          <div className="fixed bottom-0 left-0 z-10 flex justify-around w-full p-4 mt-4 md:relative bg-primaryColor md:bg-transparent md:w-96 md:justify-between md:flex">
            <ButtonPlay
                onClick={() => handleWatchFilm()}
                /* eslint-disable-next-line react/no-children-prop */
                children="Xem phim" />
            <ButtonTrailer
              onClick={() => handleWatchTrailler()}
              /* eslint-disable-next-line react/no-children-prop */
              children="Xem trailer"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Heading
            /* eslint-disable-next-line react/no-children-prop */
            children="Các diễn viên chính"
        />
        <div className="grid grid-cols-8">{renderCredit()}</div>
      </div>
    </div>
  );
};

export default FilmDetail;
