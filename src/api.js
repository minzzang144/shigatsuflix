import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4035ab85af00395edaf5c3635bc4d0ba",
    language: "ko-KR",
  },
});

api.get("tv/popular");

export default api;
