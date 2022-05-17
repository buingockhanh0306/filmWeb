import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import FilmItem from "../FilmItem";

type IFilmPopularProps = Pick<
  IFilmProps,
  | "poster_path"
  | "title"
  | "id"
  | "backdrop_path"
  | "genre_ids"
  | "vote_average"
>;

const SearchBar = () => {
  const [films, setFilms] = useState<IFilmPopularProps[]>([]);
  const [search, setSearch] = useState<string>("@");
  const pathImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getFilmPopular();
      setFilms(film.data.results);
      console.log(film.data.results);
    };
    getFilm();
  }, []);

  const renderSearchFilm = () => {
    return films.map((film, index) => {
      return film.title
        .toLowerCase()
        .includes(search.toLowerCase().trim(), 0) ? (
        <FilmItem
          key={index}
          id={film.id}
          poster_path={pathImage + film.poster_path}
          title={film.title}
          vote_average={film.vote_average}
        />
      ) : null;
    });
  };

  return (
    <label className="relative mr-4 w-80 animate-[fadeIn_0.4s_ease]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="flex items-center w-5 " viewBox="0 0 20 20">
          <GoSearch className="text-gray-300" />
        </svg>
      </span>
      <input
        className="w-full h-8 py-2 pr-3 border rounded-md text-textColor bg-primaryColor placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-secondColor sm:text-sm"
        placeholder="Tìm kiếm..."
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute z-10 px-2 overflow-y-auto rounded max-h-80 bg-primaryColor w-80 top-10">
        {!renderSearchFilm() ? <p></p> : renderSearchFilm()}
      </div>
    </label>
  );
};

export default SearchBar;
