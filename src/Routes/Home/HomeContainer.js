import React, { useCallback, useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { useDispatch } from "contexts/tmdbContext";
import { NOWPLAYING, TOPRATED, MATCH_MOBILE } from "actions/tmdbAction";
import { moviesApi, tvApi } from "api/api";

const HomeContainer = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      dispatch({ type: NOWPLAYING, payload: nowPlaying });
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      dispatch({ type: TOPRATED, payload: topRated });
    } catch {
      setError("Can't find movie information.");
    } finally {
      dispatch({ type: MATCH_MOBILE });
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <HomePresenter loading={loading} error={error} />;
};

export default HomeContainer;
