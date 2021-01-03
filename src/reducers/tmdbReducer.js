import {
  NOWPLAYING,
  UPCOMING,
  POPULAR,
  TOPRATED,
  MATCH,
  LOADING,
  ERROR,
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
