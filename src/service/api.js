import axios from "axios";
const token = window.localStorage.getItem("@KenzieHub:");

export const ApiBase = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
  headers: { Authorization: `Bearerfoobar ${token}` },
});
