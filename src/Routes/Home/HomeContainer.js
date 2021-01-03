import React, { useCallback, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useDispatch, useState } from "contexts/tmdbContext";
import {
  NOWPLAYING,
  TOPRATED,
  MATCH,
  ERROR,
  LOADING,
  LOADING_FINISH,
} from "actions/tmdbAction";
import { moviesApi, tvApi } from "api/api";

const HomeContainer = () => {
  const { nowPlaying, topRated, match, error, loading } = useState();
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: LOADING });
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      dispatch({ type: NOWPLAYING, payload: nowPlaying });
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      dispatch({ type: TOPRATED, payload: topRated });
    } catch {
      dispatch({ type: ERROR });
    } finally {
      dispatch({ type: MATCH });
      dispatch({ type: LOADING_FINISH });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      topRated={topRated}
      match={match}
      loading={loading}
      error={error}
    />
  );
};

export default HomeContainer;
