import React, { useEffect, useRef, useState } from "react";
import { moviesApi, tvApi } from "api/api";
import DetailPresenter from "./DetailPresenter";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { handleEnter } from "utils/tabEnter";
import { handleLeave } from "utils/tabLeave";
import { closeTrailer } from "utils/closeTrailer";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function DetailContainer(props) {
  const { push } = useHistory();
  const location = useLocation();
  const { id } = useParams();

  const parsedId = parseInt(id);
  const [result, setResult] = useState(null);
  const [credit, setCredit] = useState(null);
  const [recommandation, setRecommandation] = useState(null);
  const [similarity, setSimilarity] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const isMovie = useState(location.pathname.includes("/movie/"))[0];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const matchMobile = useState(
    window.matchMedia("(max-width:720px)").matches
  )[0];
  const matchDesktop = useState(
    window.matchMedia("(min-width:1600px)").matches
  )[0];
  const prevProps = usePrevious(props);

  const loadVideo = async (result) => {
    const tab = document.querySelector(".tabContainer");
    try {
      // the Player object is created uniquely based on the "player" id
      const trailer = await new window.YT.Player("player", {
        // 모바일(720px이하)이면 (100% / 270px), 데스크탑이면(1600px이상)이면 (1280px / 720px), 그 사이의 값은 640px x 360px이다.
        width: `${matchMobile ? "100%" : matchDesktop ? "1280" : "640"}`,
        height: `${matchMobile ? "270" : matchDesktop ? "720" : "360"}`,
        videoId: `${result.videos.results[0].key}`,
        playerVars: { origin: "http://localhost:3000/" },
        events: {
          onReady: () => tab.classList.add("tab__container"),
        },
      });
      setTrailer(trailer);
      return trailer;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    let result = null;
    let credit = null;
    let recommandation = null;
    let similarity = null;
    let trailer = null;
    setLoading(true);
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
      setResult(result);
      setCredit(credit);
      setRecommandation(recommandation);
      setSimilarity(similarity);
      // console.log(result, credit, recommandation, similarity);
    } catch {
      setError("Can't find anything.");
    } finally {
      if (!window.YT) {
        // If not, load the script asynchronously
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";

        // onYouTubeIframeAPIReady will load the video after the script is loaded
        window.onYouTubeIframeAPIReady = async function onYouTubeIframeAPIReady() {
          trailer = await loadVideo(result);
        };

        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        // If script is already there, load the video directly
        trailer = await loadVideo(result);
      }
      setLoading(false);
    }
    const tab = document.querySelector(".tabContainer");
    const triggers = document.querySelectorAll(".triggers > li");
    const closeButton = document.querySelector(".fa-times");

    // triggers 이벤트 핸들링 추가
    triggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", () =>
        handleEnter.call(trigger, trailer)
      );
      trigger.addEventListener("mouseleave", () =>
        handleLeave.call(trigger, trailer)
      );
    });
    closeButton.addEventListener("click", closeTrailer);

    setTimeout(() => {
      if (!tab.classList.contains("tab__container")) {
        tab.classList.add("tab__container");
      }
    }, 2000);
  };

  useEffect(() => {
    if (isNaN(parsedId)) {
      return push("/");
    }
    fetchData();

    return () => {
      const triggers = document.querySelectorAll(".triggers > li");
      const closeButton = document.querySelector(".fa-times");
      const iframeScriptJS = document.getElementsByTagName("script")[0];
      const iframeScriptAPI = document.getElementsByTagName("script")[1];
      // console.log(closeButton, triggers, iframeScriptJS, iframeScriptAPI);
      // 컴포넌트가 Unmount될 시 자동적으로 스크립트를 삭제하고 YT 전역변수도 null값으로 설정한다.
      iframeScriptJS.remove();
      iframeScriptAPI.remove();
      window.YT = null;
      // triggers의 이벤트 제거
      triggers.forEach((trigger) => {
        trigger.removeEventListener("mouseenter", () =>
          handleEnter.call(trigger, trailer)
        );
        trigger.removeEventListener("mouseleave", () =>
          handleLeave.call(trigger, trailer)
        );
      });
      closeButton.removeEventListener("click", closeTrailer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (prevProps !== undefined) {
      if (prevProps.match.params.id !== props.match.params.id) {
        const iframeScriptJS = document.getElementsByTagName("script")[0];
        const iframeScriptAPI = document.getElementsByTagName("script")[1];
        iframeScriptJS.remove();
        iframeScriptAPI.remove();
        window.YT = null;
        if (isNaN(parsedId)) {
          return push("/");
        }
        fetchData();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

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

export default DetailContainer;
