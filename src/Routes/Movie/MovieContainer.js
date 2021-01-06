import React, { useCallback, useEffect, useState } from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "api/api";
import { useDispatch } from "contexts/tmdbContext";
import { NOWPLAYING, UPCOMING, POPULAR } from "actions/tmdbAction";

const MovieContainer = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
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
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      dispatch({ type: NOWPLAYING, payload: nowPlaying });
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      dispatch({ type: POPULAR, payload: popular });
      const {
        data: { results: upComing },
      } = await moviesApi.upComing();
      dispatch({ type: UPCOMING, payload: upComing });
    } catch {
      setError("Can't find movie information.");
    } finally {
      setLoading(false);
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

  return <MoviePresenter loading={loading} error={error} />;
};

export default MovieContainer;
