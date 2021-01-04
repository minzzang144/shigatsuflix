import React, { useCallback, useEffect } from "react";
import { tvApi } from "api/api";
import TVPresenter from "./TVPresenter";
import { useDispatch, useState } from "contexts/tmdbContext";
import {
  TOPRATED,
  POPULAR_RESET,
  POPULAR,
  AIRING_TODAY,
  ERROR,
  LOADING_FINISH,
  LOADING,
} from "actions/tmdbAction";

const TVContainer = () => {
  const { topRated, popular, airingToday, error, loading } = useState();
  const dispatch = useDispatch();

  const checkSlide = useCallback(() => {
    const slideObj = document.querySelectorAll(".slide-in");
    slideObj.forEach((obj) => {
      const slideInAt =
        window.scrollY + window.innerHeight - obj.clientHeight / 2;
      const objBottom = obj.offsetTop + obj.clientHeight;

      const isHalfShown = slideInAt > obj.offsetTop;
      const isNotScrolledPast = window.scrollY < objBottom;
      // console.log(slideInAt, obj.offsetTop, window.scrollY, objBottom);
      if (!isHalfShown) {
        obj.classList.add("top-position");
      } else {
        obj.classList.remove("top-position");
      }
      if (isHalfShown && isNotScrolledPast) {
        obj.classList.add("active");
      } else {
        obj.classList.remove("active");
      }
      if (!isNotScrolledPast) {
        obj.classList.add("bottom-position");
      } else {
        obj.classList.remove("bottom-position");
      }
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: LOADING });
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      dispatch({ type: TOPRATED, payload: topRated });
      const {
        data: { results: popular },
      } = await tvApi.popular();
      dispatch({ type: POPULAR, payload: popular });
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      dispatch({ type: AIRING_TODAY, payload: airingToday });
    } catch {
      dispatch({ type: ERROR });
    } finally {
      dispatch({ type: LOADING_FINISH });
      dispatch({ type: POPULAR_RESET });
      checkSlide();
    }
  }, [dispatch, checkSlide]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", checkSlide);
    return () => window.removeEventListener("scroll", checkSlide);
  }, [checkSlide]);

  return (
    <TVPresenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
  );
};

export default TVContainer;
