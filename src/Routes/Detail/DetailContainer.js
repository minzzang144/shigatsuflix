import React from "react";
import { moviesApi, tvApi } from "api";
import DetailPresenter from "./DetailPresenter";
import { handelEnter, handleLeave } from "Utils/DropDown";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    const { isMovie } = this.state;

    let result = null;
    if (isNaN(parsedId)) {
      return push("/");
    }
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
    const triggers = document.querySelectorAll(".triggers > li");
    const background = document.querySelector(".dropdown__background");
    const nav = document.querySelector(".nav");
    triggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", handelEnter);
      trigger.addEventListener("mouseleave", handleLeave);
    });
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(this.props);
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
