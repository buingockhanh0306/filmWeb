import axiosClient from "./axiosClient";

const filmAPI = {
  getFilmPopular: (params) => {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },

  getFilmDetail: (id) => {
    const url = `movie/${id}`;
    return axiosClient.get(url);
  },
};

export default filmAPI;
