import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Actor from "components/Actor";
import Crew from "components/Crew";
import Production from "components/Production";
import Recommandation from "components/Recommandation";
import Season from "components/Season";
import Similarity from "components/Similarity";

const Button = styled.button`
  color: #e74c3c;
  font-size: 20px;
  background: rgba(20, 20, 20, 0.7);
  margin: 0px 20px 20px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;

const DropDown = styled.div`
  position: absolute;
  transform: translate(-75px, 50px);
  padding: 25px 10px 10px 20px;
  max-width: calc(100vw - 100px);
  max-height: calc(100vh - 150px);
`;

// absolute위치는 Dropdown Box를 기준으로 한다.(Dropdown + Ul > Li > Content)
const Wrapper = styled.div`
  display: none;
  opacity: 0;
  transition: all 0.5s;
  will-change: opacity;
  &.film__content {
    color: black;
    overflow-x: hidden;
    overflow-y: auto;
    max-width: calc(100vw - 140px);
    max-height: calc(100vh - 185px);
    scrollbar-color: #8ec5fc #f5f5f5;
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar {
      width: 12px;
      border-radius: 10px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(#30cfd0),
        to(#330867)
      );
      background-image: -webkit-linear-gradient(
        bottom,
        #30cfd0 0%,
        #330867 100%
      );
      background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    }
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
  &.trigger-enter {
    ${Wrapper} {
      display: flex;
      flex-direction: column;
    }
  }
  &.trigger-enter-active {
    ${Wrapper} {
      opacity: 1;
    }
  }
  &:hover {
    ${Button} {
      color: rgba(20, 20, 20);
      background-color: rgba(255, 255, 255);
    }
  }
`;

const PostFilmData = ({
  result,
  credit,
  recommandation,
  similarity,
  isMovie,
}) => {
  return (
    <Li className="filmList">
      <Button>Film</Button>
      <DropDown className="dropdown">
        <Wrapper className="film__content">
          {!isMovie ? (
            // show Detail Tab에서만 보이는 Poster Component
            <Season result={result} />
          ) : null}
          <Actor credit={credit} />
          <Crew credit={credit} />
          <Production result={result} />
          <Recommandation isMovie={isMovie} recommandation={recommandation} />
          <Similarity isMovie={isMovie} similarity={similarity} />
        </Wrapper>
      </DropDown>
    </Li>
  );
};

PostFilmData.propTypes = {
  result: PropTypes.object,
  credit: PropTypes.object,
  recommandation: PropTypes.array,
  similarity: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
};

export default PostFilmData;
