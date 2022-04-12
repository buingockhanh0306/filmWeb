import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";

type IFilmReviewProps = Pick<
  IFilmProps,
  "author" | "content" | "author_detail" | "avatar_path"
>;
const FilmReview = () => {
  const pathImage = "https://image.tmdb.org/t/p/w500";

  const [films, getFilms] = useState<IFilmReviewProps[]>([]);
  const router = useRouter();
  const idFilm = router.query.filmID;
  useEffect(() => {
    const getFilmReview = async () => {
      const film = await filmAPI.getFilmReview(idFilm);
      getFilms(film.data.results);
      console.log(film.data.results);
    };
    getFilmReview();
  }, []);

  const renderReview = () => {
    return films.map((film) => (
      <div className="text-textColor">
        <div>
          <h3 className="text-textColor">{film.author}</h3>
        </div>
      </div>
    ));
  };
  return <div className="">{renderReview()}</div>;
};

export default FilmReview;
