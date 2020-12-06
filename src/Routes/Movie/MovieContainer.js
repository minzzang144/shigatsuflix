import React from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "api";
import checkSlide from "Utils/CheckSlide";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await moviesApi.upComing();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movie information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
    checkSlide();
    window.addEventListener("scroll", checkSlide);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", checkSlide);
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <MoviePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        loading={loading}
        error={error}
      />
    );
  }
}
