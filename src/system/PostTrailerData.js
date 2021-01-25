import React, { useRef } from "react";
import styled from "styled-components";
import theme from "Styles/Theme";
import { closeTrailer } from "utils/closeTrailer";

const Button = styled.button`
  color: #e74c3c;
  font-size: 20px;
  background: rgba(20, 20, 20, 0.7);
  margin: 0px 20px 20px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;

// absolute위치는 Dropdown Box를 기준으로 한다.(Dropdown + Ul > Li > Content)
const Wrapper = styled.div`
  display: none;
  opacity: 0;
  transition: all 0.5s;
  will-change: opacity;
  // Trailer Content만 Modal 효과를 주었다.
  &.trailer__content {
    position: absolute;
    top: -50px;
    transform: translate(60px, 100px);
    justify-content: center;
    align-items: center;
    width: calc(100vw - 100px);
    height: calc(100vh - 150px);
    background-color: rgba(20, 20, 20, 0.7);
    @media ${(props) => props.theme.mobile} {
      width: 100vw;
    }
  }
`;

// absolute기준은 Content이다.(Content > Close)
const Close = styled.i`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Trailer = styled.div``;

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

const PostTrailerData = ({ result }) => {
  const closeRef = useRef();
  return (
    <Li className="trailerList">
      <Button>Trailer</Button>
      <Wrapper className="trailer__content" theme={theme}>
        <Close ref={closeRef} onClick={closeTrailer} className="fas fa-times" />
        {result.videos.results[0] ? (
          <>
            <Trailer id="player" />
          </>
        ) : (
          "There are no trailers found."
        )}
      </Wrapper>
    </Li>
  );
};

export default PostTrailerData;
