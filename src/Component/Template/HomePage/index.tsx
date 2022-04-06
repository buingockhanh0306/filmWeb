import React from "react";
import Banner from "../../atoms/Banner";
import FilmPopular from "../../organisms/FilmPopular";

const HomePage = () => {
  return (
    <div className="bg-primaryColor">
      <Banner />
      <div className="container h-full mx-auto">
        <FilmPopular />
      </div>
    </div>
  );
};

export default HomePage;
