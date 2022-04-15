import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";

type IFilmCredit = Pick<IFilmProps, "name" | "profile_path" | "character">;

const FilmCredits: React.FC<IFilmCredit> = ({
  name,
  profile_path,
  character,
}) => {
  return (
    <div className="flex items-center m-2">
      <img className="w-12 h-12 mr-4 rounded-full" src={profile_path} alt="" />
      <h1 className="text-textColor">
        {name} - {character}
      </h1>
    </div>
  );
};

export default FilmCredits;