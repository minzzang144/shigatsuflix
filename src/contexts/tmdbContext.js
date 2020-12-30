import React, { createContext, useReducer } from "react";
import { tmdbReducer } from "reducers/tmdbReducer";
import { tmdbState } from "stores/tmdbStore";

const TmdbContext = createContext();

export const TmdbProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tmdbReducer, tmdbState);
  return (
    <TmdbContext.Provider value={{ state, dispatch }}>
      {children}
    </TmdbContext.Provider>
  );
};
