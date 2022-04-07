import React from "react";
import Banner from "../../atoms/Banner";
import FilmDetail from "../../organisms/FilmDetail";
import FilmPopular from "../../organisms/FilmPopular";

const FilmDetailPage = () => {
  return (
    <div className="bg-primaryColor">
      <div className="container h-full mx-auto">
        <FilmDetail />
      </div>
    </div>
  );
};

export default FilmDetailPage;
