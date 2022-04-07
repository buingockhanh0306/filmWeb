import React from "react";
import ButtonMore from "../Button/ButtonMore";
import ButtonPlay from "../Button/ButtonPlay";

const Banner = () => {
  return (
    <div className="relative">
      <video width="100%" controls muted>
        <source src="/images/trailer.mp4" type="video/mp4" />
      </video>
      {/* <img width="100%" height="100vh" src="/images/banner.jpg" /> */}
      <div className="absolute w-1/2 text-textColor bottom-44 left-10">
        <h1 className="text-6xl ">Spider-Man: No Way Home</h1>
        <p className="my-6">
          Peter Parker is unmasked and no longer able to separate his normal
          life from the high-stakes of being a super-hero. When he asks for help
          from Doctor Strange the stakes become even
        </p>
        <div className="flex">
          <div className="mr-4">
            <ButtonPlay children="Watch" />
          </div>
          <ButtonMore children="More Info" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
