import axios from "axios";

export const ApiBase = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
});
