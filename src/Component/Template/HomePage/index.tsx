import React, {useEffect, useState} from "react";
import Banner from "../../organisms/Banner";
import FilmPopular from "../../organisms/FilmPopular";
import FilmTop from "../../organisms/FilmTop";
import filmAPI from "../../../pages/api/axios/filmAPI";


const HomePage: React.FC = () => {
    const [filmPopular, setFilmPopular] = useState([]);
    const [filmTop, setFilmTop] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
      const getFilmPopular = async () => {
        const film = await filmAPI.getFilmPopular();
        setFilmPopular(film.data.results);
      };
      getFilmPopular();
    }, []);

    useEffect(() => {
        const getFilm: () => Promise<void> = async () => {
            const film = await filmAPI.getFilmTop();
            setFilmTop(film.data.results);
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
    <div className="bg-primaryColor">
      <Banner data={filmPopular}/>
      <div className="container h-full mx-auto">
        <FilmTop filmData={filmTop} genresData={genres}/>
        <FilmPopular data={filmPopular}/>
      </div>
    </div>
  );
};

export default HomePage;
