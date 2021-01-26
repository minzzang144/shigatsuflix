import React, { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "Styles/Theme";
import { handleEnter } from "utils/tabEnter";
import { handleLeave } from "utils/tabLeave";
import PostTrailerData from "./PostTrailerData";
import PostFilmData from "./PostFilmData";

// Tab Container(Detail Screen 상단에 위치) + 부모 relative는 DetailPresenter의 Content가 가지고 있음
const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 60px;
  left: 50%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  transform: translate(-50%);
  &.tab__container {
    visibility: visible;
    opacity: 1;
  }
`;

const Nav = styled.div``;

// DropDown Box(Content 크기에 맞게 Background가 설정될 예정) + Tab 컴포넌트의 Container를 기준으로 absolute위치를 가진다.
const DropDownBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  background: rgba(255, 255, 255);
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  opacity: 0;
  // Nav Button에 mouseenter이벤트 발생 시 생길 transition이다.
  &.open {
    opacity: 1;
  }
`;

const Arrow = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  background: rgba(255, 255, 255);
  transform: translate(380%, -50%) rotate(45deg);
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const PostTabData = forwardRef(
  ({ result, credit, recommandation, similarity, isMovie }, { trailerRef }) => {
    const tabRef = useRef();

    useEffect(() => {
      const triggers = tabRef.current.querySelectorAll(".triggers > li");
      // triggers 이벤트 핸들링 추가
      triggers.forEach((trigger) => {
        trigger.addEventListener("mouseenter", () =>
          handleEnter.call(trigger, trailerRef)
        );
        trigger.addEventListener("mouseleave", () =>
          handleLeave.call(trigger, trailerRef)
        );
      });

      const tabInerval = setTimeout(() => {
        if (!tabRef.current.classList.contains("tab__container")) {
          tabRef.current.classList.add("tab__container");
        }
      }, 2000);

      return () => {
        triggers.forEach((trigger) => {
          trigger.removeEventListener("mouseenter", () =>
            handleEnter.call(trigger, trailerRef)
          );
          trigger.removeEventListener("mouseleave", () =>
            handleLeave.call(trigger, trailerRef)
          );
        });
        clearTimeout(tabInerval);
      };
    }, [trailerRef]);

    return (
      <Container ref={tabRef} className="tabContainer" theme={theme}>
        <Nav className="nav">
          <DropDownBox className="dropDownBg">
            <Arrow></Arrow>
          </DropDownBox>
          <Ul className="triggers">
            <PostTrailerData result={result} />
            <PostFilmData
              result={result}
              credit={credit}
              recommandation={recommandation}
              similarity={similarity}
              isMovie={isMovie}
            />
          </Ul>
        </Nav>
      </Container>
    );
  }
);

PostTabData.propTypes = {
  result: PropTypes.object,
  credit: PropTypes.object,
  recommandation: PropTypes.array,
  similarity: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
};

export default PostTabData;
