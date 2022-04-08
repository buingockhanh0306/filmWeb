import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "content-type": "application.json",
  },
  params: {
    api_key: "461216745fbea586a0d4e6b9b73afefc",
    append_to_response: "videos",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.request.use(
  (reponse) => {
    if (reponse && reponse.data) {
      return reponse.data;
    }
    return reponse;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
