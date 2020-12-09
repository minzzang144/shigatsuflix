import React from "react";
import { moviesApi, tvApi } from "api";
import DetailPresenter from "./DetailPresenter";
import { handelEnter, handleLeave } from "Utils/HoverTab";
import closeTrailer from "Utils/CloseTrailer";

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
    const closeButton = document.querySelector(".fa-times");
    triggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", handelEnter);
      trigger.addEventListener("mouseleave", handleLeave);
    });
    closeButton.addEventListener("click", closeTrailer);

    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      this.loadVideo();
    }
  }

  componentWillUnmount() {
    const triggers = document.querySelectorAll(".triggers > li");
    const closeButton = document.querySelector(".fa-times");
    triggers.forEach((trigger) => {
      trigger.removeEventListener("mouseenter", handelEnter);
      trigger.removeEventListener("mouseleave", handleLeave);
    });
    closeButton.removeEventListener("click", closeTrailer);
    this.player = null;
  }

  loadVideo = () => {
    // the Player object is created uniquely based on the "player" id
    const { result } = this.state;
    this.player = new window.YT.Player("player", {
      videoId: `${result.videos.results[0].key}`,
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  // The API will call this function when the video player is ready.
  onPlayerReady(event) {
    event.target.playVideo();
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(this.props);
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
