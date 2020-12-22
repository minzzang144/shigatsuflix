import React from "react";
import { moviesApi, tvApi } from "api";
import SearchPresenter from "./SearchPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateInput = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({
        error: "Can't find results.",
      });
    } finally {
      this.setState({
        loading: false,
      });
      this.checkSlide();
    }
  };

  checkSlide() {
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
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkSlide);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkSlide);
  }

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateInput={this.updateInput}
      />
    );
  }
}
