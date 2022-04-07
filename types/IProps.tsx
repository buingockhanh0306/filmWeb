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
}

export interface ILinkProps {
  children: string;
  href: string;
}
export interface ITVProps {
  poster_path: string;
  name: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  episode_run_time: number;
  id: number;
  backdrop_path: string;
}
