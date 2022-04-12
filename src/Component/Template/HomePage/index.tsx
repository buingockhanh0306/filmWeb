import React from "react";
import Banner from "../../organisms/Banner";
import FilmPopular from "../../organisms/FilmPopular";
import FilmTop from "../../organisms/FilmTop";
import TVTop from "../../organisms/TVTop";

const HomePage = () => {
  return (
    <div className="bg-primaryColor">
      <Banner />
      <div className="container h-full mx-auto">
        <FilmTop />
        <TVTop />
        <FilmPopular />
      </div>
    </div>
  );
};

export default HomePage;
