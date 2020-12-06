import React from "react";
import { tvApi } from "api";
import TVPresenter from "./TVPresenter";
import checkSlide from "Utils/CheckSlide";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday,
      });
    } catch {
      this.setState({
        error: "Can't find TV information.",
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
    const { topRated, popular, airingToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
