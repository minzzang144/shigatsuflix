import React, { useCallback, useEffect, useState } from "react";
import { moviesApi, tvApi } from "api/api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const searchByTerm = useCallback(async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
      checkSlide();
    }
  }, [searchTerm, checkSlide]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (searchTerm !== "") {
        searchByTerm();
      }
    },
    [searchTerm, searchByTerm]
  );

  const updateInput = useCallback((event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkSlide);
    return () => window.removeEventListener("scroll", checkSlide);
  }, [checkSlide]);

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      updateInput={updateInput}
    />
  );
};

export default SearchContainer;
