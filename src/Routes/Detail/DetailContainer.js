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
    const mql = window.matchMedia("(max-width:720px)");
    const mqlTwo = window.matchMedia("(min-width:1600px)");
    this.state = {
      result: null,
      credit: null,
      recommandation: null,
      similarity: null,
      trailer: null,
      isMovie: pathname.includes("/movie/"),
      matchMobile: mql.matches,
      matchDesktop: mqlTwo.matches,
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
    let similarity = null;
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
        ({
          data: { results: similarity },
        } = await moviesApi.similarMovies(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: credit } = await tvApi.creditDetail(parsedId));
        ({
          data: { results: recommandation },
        } = await tvApi.recommandation(parsedId));
        ({
          data: { results: similarity },
        } = await tvApi.similarShows(parsedId));
      }
      console.log(result, credit, recommandation, similarity);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ result, credit, recommandation, similarity });
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

    const tab = document.querySelector(".tabContainer");
    const triggers = document.querySelectorAll(".triggers > li");
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

    setTimeout(() => {
      if (!tab.classList.contains("tab__container")) {
        tab.classList.add("tab__container");
      }
    }, 2000);
  }

  async componentDidUpdate(prevProps) {
    // Detail page url 부분 중 id가 업데이트 되어 달라지게 되는 경우 새로 Detail Page를 re-rendering 한다.
    if (prevProps.match.params.id !== this.props.match.params.id) {
      // console.log(prevProps.match.params.id, this.props.match.params.id);
      const {
        match: {
          params: { id },
        },
        history: { push },
        location: { pathname },
      } = this.props;
      const parsedId = parseInt(id);
      const { isMovie } = this.state;
      const iframeScriptJS = document.getElementsByTagName("script")[0];
      const iframeScriptAPI = document.getElementsByTagName("script")[1];

      let result = null;
      let credit = null;
      let recommandation = null;
      let similarity = null;
      if (isNaN(parsedId)) {
        return push("/");
      }
      this.setState({
        result: null,
        credit: null,
        recommandation: null,
        similarity: null,
        trailer: null,
        isMovie: pathname.includes("/movie/"),
        loading: true,
        error: null,
      });
      iframeScriptJS.remove();
      iframeScriptAPI.remove();
      window.YT = null;
      try {
        if (isMovie) {
          ({ data: result } = await moviesApi.movieDetail(parsedId));
          ({ data: credit } = await moviesApi.creditDetail(parsedId));
          ({
            data: { results: recommandation },
          } = await moviesApi.recommandation(parsedId));
          ({
            data: { results: similarity },
          } = await moviesApi.similarMovies(parsedId));
        } else {
          ({ data: result } = await tvApi.showDetail(parsedId));
          ({ data: credit } = await tvApi.creditDetail(parsedId));
          ({
            data: { results: recommandation },
          } = await tvApi.recommandation(parsedId));
          ({
            data: { results: similarity },
          } = await tvApi.similarShows(parsedId));
        }
        console.log(result, credit, recommandation, similarity);
      } catch {
        this.setState({ error: "Can't find anything." });
      } finally {
        this.setState({ result, credit, recommandation, similarity });
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
      const tab = document.querySelector(".tabContainer");
      const triggers = document.querySelectorAll(".triggers > li");
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

      setTimeout(() => {
        if (!tab.classList.contains("tab__container")) {
          tab.classList.add("tab__container");
        }
      }, 2000);
    }
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
    const { result, matchMobile, matchDesktop } = this.state;
    const tab = document.querySelector(".tabContainer");
    try {
      // the Player object is created uniquely based on the "player" id
      this.setState({
        trailer: await new window.YT.Player("player", {
          // 모바일(720px이하)이면 (100% / 270px), 데스크탑이면(1600px이상)이면 (1280px / 720px), 그 사이의 값은 640px x 360px이다.
          width: `${matchMobile ? "100%" : matchDesktop ? "1280" : "640"}`,
          height: `${matchMobile ? "270" : matchDesktop ? "720" : "360"}`,
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
    const {
      result,
      credit,
      recommandation,
      similarity,
      isMovie,
      loading,
      error,
    } = this.state;
    console.log(this.props);
    return (
      <DetailPresenter
        result={result}
        credit={credit}
        recommandation={recommandation}
        similarity={similarity}
        isMovie={isMovie}
        loading={loading}
        error={error}
      />
    );
  }
}
