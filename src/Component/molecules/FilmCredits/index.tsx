import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";

type IFilmCredit = Pick<IFilmProps, "name" | "profile_path" | "character">;

const FilmCredits: React.FC<IFilmCredit> = ({
  name,
  profile_path,
  character,
}) => {
  return (
    <div className="inline-block mx-4 text-center">
      <img className="w-full rounded" src={profile_path} alt="" />
      <h5 className="py-2 font-bold text-center cursor-pointer text-textColor hover:text-secondColor">
        {name}
      </h5>
      <p className="hidden text-sm text-center md:block text-textColor">
        {character}
      </p>
    </div>
  );
};

export default FilmCredits;
