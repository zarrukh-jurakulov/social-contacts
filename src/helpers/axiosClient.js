import axios from "axios";
import { getToken } from "./storages";

const axiosClient = () => {
  const baseURL = 'https://truly-contacts.herokuapp.com/api';
  let headers = {};

  //getting token from localstorage
  const token = getToken()

  if (token) {
        headers.Authorization = `Bearer ${token}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("token");

      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};

export default axiosClient

//axiosClient().post()