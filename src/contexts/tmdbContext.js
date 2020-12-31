import React, { createContext, useContext, useReducer } from "react";
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

export const useState = () => {
  const { state } = useContext(TmdbContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(TmdbContext);
  return dispatch;
};
