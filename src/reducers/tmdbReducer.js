import {
  NOWPLAYING,
  TOPRATED,
  MATCH,
  LOADING,
  ERROR,
} from "actions/tmdbAction";
import { moviesApi, tvApi } from "api/api";

export const tmdbReducer = (state, action) => {
  switch (action.type) {
    case NOWPLAYING:
      return {
        ...state,
        nowPlaying: [...action.payload],
      };
    case TOPRATED:
      return {
        ...state,
        topRated: [...action.payload],
      };
    case MATCH:
      const match = window.matchMedia("(max-width:720px)");
      return {
        ...state,
        match: match.matches,
      };
    case LOADING:
      return {
        ...state,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: "Can't find movie information.",
      };
    default:
      return;
  }
};
