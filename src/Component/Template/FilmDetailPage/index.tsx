import React from "react";
import FilmDetail from "../../organisms/FilmDetail";
import FilmRecommended from "../../organisms/FilmRecommended";

const FilmDetailPage = () => {
  return (
    <div className="bg-primaryColor">
      <div className="container h-full mx-auto">
        <FilmDetail />
        <FilmRecommended />
      </div>
    </div>
  );
};

export default FilmDetailPage;
//Bui Ngoc Khanh
