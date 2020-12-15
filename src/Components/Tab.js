import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const Nav = styled.nav``;

// DropDown Box(Content 크기에 맞게 Background가 설정될 예정) + Tab 컴포넌트의 Container를 기준으로 absolute위치를 가진다.
const DropDownBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 100px;
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
  transform: translateY(-50%) rotate(45deg);
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

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
  top: -50px;
  padding: 25px 20px 10px 20px;
`;

// absolute위치는 Dropdown Box를 기준으로 한다.(Dropdown + Ul > Li > Content)
const Wrapper = styled.div`
  display: none;
  opacity: 0;
  transition: all 0.5s;
  transform: translateY(100px);
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
  }
  &.film__content {
    color: black;
    overflow-y: auto;
    max-height: calc(100vh - 150px);
    scrollbar-color: #8ec5fc #f5f5f5;
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #f5f5f5;
      background: transparent;
    }
    &::-webkit-scrollbar-track-piece:start {
      background: transparent;
    }
    &::-webkit-scrollbar {
      width: 12px;
      border-radius: 10px;
      background: transparent;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-image: -webkit-linear-gradient(
        330deg,
        #e0c3fc 0%,
        #8ec5fc 100%
      );
      background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
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

const Title = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
`;

const Box = styled.ul``;

const BoxList = styled.li``;

const Photo = styled.div`
  width: 100px;
  height: 200px;
  border-radius: 3px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
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

const Tab = ({ result, credit }) => {
  return (
    <Container id="tabContainer">
      <Nav className="nav">
        <DropDownBox className="dropdown__background">
          <Arrow></Arrow>
        </DropDownBox>
        <Ul className="triggers">
          <Li className="trailer__list">
            <Button>Trailer</Button>
            <Wrapper className="trailer__content">
              <Close className="fas fa-times" />
              {result.videos.results[0] ? (
                <>
                  <Trailer id="player" />
                </>
              ) : (
                "There are no trailers found."
              )}
            </Wrapper>
          </Li>
          <Li>
            <Button>Film</Button>
            <DropDown className="dropdown">
              <Wrapper className="film__content">
                <Title>Actor</Title>
                <Box>
                  {credit.cast &&
                    credit.cast.map((actor) => (
                      <BoxList>
                        <Photo
                          bgImage={
                            actor.profile_path
                              ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                              : "/noPosterSmall.png"
                          }
                        ></Photo>
                      </BoxList>
                    ))}
                </Box>
              </Wrapper>
            </DropDown>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
};

Tab.propTypes = {
  result: PropTypes.object,
  cast: PropTypes.object,
};

export default Tab;
