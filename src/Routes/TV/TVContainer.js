import React, { useCallback, useEffect, useState } from "react";
import { tvApi } from "api/api";
import TVPresenter from "./TVPresenter";
import { useDispatch } from "contexts/tmdbContext";
import { TOPRATED, POPULAR, AIRING_TODAY } from "actions/tmdbAction";

const TVContainer = () => {
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

  return <TVPresenter loading={loading} error={error} />;
};

export default TVContainer;
