import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translate(-50%);
`;

const Nav = styled.nav``;

const DropDown = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
  opacity: 0;
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

const Content = styled.div`
  position: absolute;
  top: -45px;
  display: none;
  opacity: 0;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  overflow-y: auto;
  &.trailer {
    transform: translate(60px, 100px);
    justify-content: center;
    align-items: center;
    width: calc(100vw - 100px);
    height: calc(100vh - 150px);
    background-color: rgba(20, 20, 20, 0.7);
  }
`;

const Close = styled.i`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const Trailer = styled.iframe`
  min-width: 854px;
  min-height: 480px;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
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
`;

const Tab = ({ result }) => {
  return (
    <Container>
      <Nav className="nav">
        <DropDown className="dropdown__background">
          <Arrow></Arrow>
        </DropDown>
        <Ul className="triggers">
          <Li>
            <Button>Trailer</Button>
            <Content className="trailer">
              <Close className="fas fa-times" />
              {result.videos.results && (
                <Trailer
                  src={`https://youtube.com/embed/${result.videos.results[0].key}`}
                />
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
