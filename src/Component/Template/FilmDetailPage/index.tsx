import React, {useEffect, useState} from "react";
import FilmDetail from "../../organisms/FilmDetail";
import FilmRecommended from "../../organisms/FilmRecommended";
import filmAPI from "../../../pages/api/axios/filmAPI";
import {useRouter} from "next/router";

const FilmDetailPage = () => {
    const [filmCredits, setFilmCredits] = useState([])
    const [filmDetail, setFilmDetail] = useState({
        id: 0,
        title: "",
        overview: "",
        backdrop_path: "",
        vote_count: 0,
        vote_average: 0,
        release_date: "",
        runtime: 0,
        homepage: "",
        poster_path: "",
        genres:[{
            name: ""
        }]
    })

    const router = useRouter();
    const idFilm = router.query.filmID;

    useEffect(() => {
      const getFilmCredits = async () => {
        const film = await filmAPI.getFilmCredits(idFilm);
        setFilmCredits(film.data.cast);
      };
      getFilmCredits();
    }, [idFilm]);

    useEffect(() => {
      const getFilmDetail = async () => {
        const film = await filmAPI.getFilmDetail(idFilm);
        setFilmDetail(film.data);
      };
      getFilmDetail();
    }, [idFilm]);
  return (
    <div className="bg-primaryColor">
      <div className="container h-full mx-auto">
        <FilmDetail filmDetail={filmDetail} filmCredits={filmCredits}/>
        <FilmRecommended />
      </div>
    </div>
  );
};

export default FilmDetailPage;
