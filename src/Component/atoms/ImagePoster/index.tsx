import React from "react";

interface IImagePosterProps {
  poster_path: string;
}
const ImagePoster: React.FC<IImagePosterProps> = ({ poster_path }) => {
  const pathImage = "https://image.tmdb.org/t/p/w500";
  return (
    <img
      className="h-full rounded"
      src={pathImage + poster_path}
      alt="poster"
    />
  );
};

export default ImagePoster;
