import React from "react";
import { moviesApi, tvApi } from "api";
import DetailPresenter from "./DetailPresenter";
import { handleEnter, handleLeave } from "Utils/HoverTab";
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
      credit: null,
      recommandation: null,
      trailer: null,
      isMovie: pathname.includes("/movie/"),
      loading: true,
      error: null,
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
    let credit = null;
    let recommandation = null;
    if (isNaN(parsedId)) {
      return push("/");
    }
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        ({ data: credit } = await moviesApi.creditDetail(parsedId));
        ({
          data: { results: recommandation },
        } = await moviesApi.recommandation(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: credit } = await tvApi.creditDetail(parsedId));
        ({
          data: { results: recommandation },
        } = await tvApi.recommandation(parsedId));
      }
      console.log(result, credit, recommandation);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ result, credit, recommandation });
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
        await this.loadVideo();
      }
      this.setState({ loading: false });
    }

    const triggers = document.querySelectorAll(".triggers > li");
    const background = document.querySelector(".dropDownBg");
    const nav = document.querySelector(".nav");
    const closeButton = document.querySelector(".fa-times");

    // triggers 이벤트 핸들링 추가
    triggers.forEach((trigger) => {
      const mouseEnter = handleEnter.bind(trigger);
      const mouseLeave = handleLeave.bind(trigger);
      trigger.addEventListener("mouseenter", () =>
        mouseEnter(this.state.trailer)
      );
      trigger.addEventListener("mouseleave", () =>
        mouseLeave(this.state.trailer)
      );
    });
    closeButton.addEventListener("click", closeTrailer);
  }

  componentWillUnmount() {
    const triggers = document.querySelectorAll(".triggers > li");
    const closeButton = document.querySelector(".fa-times");
    const iframeScriptJS = document.getElementsByTagName("script")[0];
    const iframeScriptAPI = document.getElementsByTagName("script")[1];

    // 컴포넌트가 Unmount될 시 자동적으로 스크립트를 삭제하고 YT 전역변수도 null값으로 설정한다.
    iframeScriptJS.remove();
    iframeScriptAPI.remove();
    window.YT = null;
    // triggers의 이벤트 제거
    triggers.forEach((trigger) => {
      const mouseEnter = handleEnter.bind(trigger);
      const mouseLeave = handleLeave.bind(trigger);
      trigger.removeEventListener("mouseenter", () =>
        mouseEnter(this.state.trailer)
      );
      trigger.removeEventListener("mouseleave", () =>
        mouseLeave(this.state.trailer)
      );
    });
    closeButton.removeEventListener("click", closeTrailer);
  }

  loadVideo = async () => {
    const { result } = this.state;
    const tab = document.querySelector(".tabContainer");
    try {
      // the Player object is created uniquely based on the "player" id
      this.setState({
        trailer: await new window.YT.Player("player", {
          videoId: `${result.videos.results[0].key}`,
          playerVars: { origin: "http://localhost:3000" },
          events: {
            onReady: () => tab.classList.add("tab__container"),
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { result, credit, recommandation, loading, error } = this.state;
    console.log(this.props);
    return (
      <DetailPresenter
        result={result}
        credit={credit}
        recommandation={recommandation}
        loading={loading}
        error={error}
      />
    );
  }
}
