import React from "react";
import {GetServerSideProps} from "next";
import filmAPI from "../api/axios/filmAPI";
import Banner from "../../Component/organisms/Banner";
import FilmTop from "../../Component/organisms/FilmTop";
import FilmPopular from "../../Component/organisms/FilmPopular";

interface IHomeProps{
    filmPopular:{
        id: number;
        title: string;
        overview: string;
        backdrop_path: string;
    }[]
    filmTop:{
        id: number;
        title: string;
        overview: string;
        backdrop_path: string;
        genre_ids: number[]
    }[]
    genres:{
        name: string;
        id: number;
    }[]
}
const HomePage: React.FC<IHomeProps> = ({ filmPopular, filmTop, genres }) => {

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

export const getServerSideProps: GetServerSideProps = async () =>{
    const res = await filmAPI.getFilmPopular()
    const resFilmTop = await filmAPI.getFilmTop();
    const resGenre = await filmAPI.getGenres();

    const filmPopular = await res.data.results
    const filmTop = await resFilmTop.data.results;
    const genres = await resGenre.data.genres

    return { props: { filmPopular, filmTop, genres} }
}