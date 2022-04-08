import axiosClient from "./axiosClient";

const filmAPI = {
  getFilmPopular: (params) => {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },

  getFilmTop: (params) => {
    const url = "movie/top_rated";
    return axiosClient.get(url, { params });
  },

  getFilmDetail: (id) => {
    const url = `movie/${id}`;
    return axiosClient.get(url);
  },

  getTVPopular: (params) => {
    const url = "/tv/popular";
    return axiosClient.get(url, { params });
  },
  getTVTop: (params) => {
    const url = "/tv/top_rated";
    return axiosClient.get(url, { params });
  },
  getTVDetail: (id) => {
    const url = `tv/${id}`;
    return axiosClient.get(url);
  },
  getGenres: (params) => {
    const url = "/genre/movie/list";
    return axiosClient.get(url, { params });
  },
  getGenresTV: (params) => {
    const url = "/genre/tv/list";
    return axiosClient.get(url, { params });
  },
};

export default filmAPI;
