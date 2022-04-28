import React from "react";
import Banner from "../../organisms/Banner";
import FilmPopular from "../../organisms/FilmPopular";
import FilmTop from "../../organisms/FilmTop";
import FilmTrending from "../../organisms/FilmTrending";

const HomePage = () => {
  return (
    <div className="bg-primaryColor">
      <div className="sm:hidden md:visible">
        <Banner />
      </div>
      <div className="container h-full mx-auto">
        <FilmTop />
        {/* <FilmTrending /> */}
        <FilmPopular />
      </div>
    </div>
  );
};

export default HomePage;
