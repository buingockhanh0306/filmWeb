export interface IFilmProps {
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  id: number;
  backdrop_path: string;
  name: string;
  genre_ids: number[];
}

export interface ILinkProps {
  children: string;
  href: string;
}
export interface ITVProps {
  name: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  episode_run_time: number;
  id: number;
  backdrop_path: string;
  genre_ids: number[];
}
export interface IGenresProps {
  name: string;
  id: number;
}
