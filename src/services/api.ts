import axios from "axios";

const myKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: myKey, 
  },
});