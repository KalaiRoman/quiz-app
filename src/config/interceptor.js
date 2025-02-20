import axios from "axios";
import { Envfiles } from "../utils/EnvFiles";
import { getToken } from "../utils/TokenLocal";

const axiosUrl = axios.create({
  baseURL: Envfiles?.baseurl,
});
axiosUrl.interceptors.request.use(
  function (config) {
    const token = getToken();
    config.url = `${Envfiles?.baseurl}${config.url}`;
    config.withCredentials = false;
    if (token) {
      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosUrl.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const instanceBaseUrl = axiosUrl;

export default instanceBaseUrl;
