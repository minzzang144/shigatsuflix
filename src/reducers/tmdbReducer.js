import {
  NOWPLAYING,
  UPCOMING,
  POPULAR_RESET,
  POPULAR,
  TOPRATED,
  AIRING_TODAY,
  MATCH,
  ERROR,
  LOADING,
  LOADING_FINISH,
} from "actions/tmdbAction";

export const tmdbReducer = (state, action) => {
  switch (action.type) {
    case NOWPLAYING:
      return {
        ...state,
        nowPlaying: [...action.payload],
      };
    case UPCOMING:
      return {
        ...state,
        upComing: [...action.payload],
      };
    case POPULAR_RESET:
      return {
        ...state,
        popular: [],
      };
    case POPULAR:
      return {
        ...state,
        popular: [...action.payload],
      };
    case TOPRATED:
      return {
        ...state,
        topRated: [...action.payload],
      };
    case AIRING_TODAY:
      return {
        ...state,
        airingToday: [...action.payload],
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
        loading: true,
      };
    case LOADING_FINISH:
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
