import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Tab Container(Detail Screen 상단에 위치) + 부모 relative는 DetailPresenter의 Content가 가지고 있음
const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 55px;
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
const DropDown = styled.div`
  position: absolute;
  top: -100px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 100px;
  background: rgba(20, 20, 20, 0.2);
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
  background: rgba(20, 20, 20, 0.2);
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

// absolute위치는 Dropdown Box를 기준으로 한다.(Dropdown + Ul > Li > Content)
const Content = styled.div`
  position: absolute;
  top: -45px;
  display: none;
  opacity: 0;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  overflow-y: auto;
  // Trailer Content만 Modal 효과를 주었다.
  &.trailer__content {
    transform: translate(60px, 100px);
    justify-content: center;
    align-items: center;
    width: calc(100vw - 100px);
    height: calc(100vh - 150px);
    background-color: rgba(20, 20, 20, 0.7);
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
    ${Content} {
      display: flex;
    }
  }
  &.trigger-enter-active {
    ${Content} {
      opacity: 1;
    }
  }
  &:hover {
    ${Button} {
      color: rgba(20, 20, 20);
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const Tab = ({ result }) => {
  return (
    <Container id="tabContainer">
      <Nav className="nav">
        <DropDown className="dropdown__background">
          <Arrow></Arrow>
        </DropDown>
        <Ul className="triggers">
          <Li className="trailer__list">
            <Button>Trailer</Button>
            <Content className="trailer__content">
              <Close className="fas fa-times" />
              {result.videos.results[0] ? (
                <>
                  <Trailer id="player" />
                </>
              ) : (
                "There are no trailers found."
              )}
            </Content>
          </Li>
          <Li>
            <Button>Film</Button>
            <Content></Content>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
};

Tab.propTypes = {
  result: PropTypes.object,
};

export default Tab;
