import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  color: white;
  background-color: rgba(20, 20, 20, 0.8);
  font-size: 12px;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#e74c3c" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  &.AppName {
    width: 100px;
    color: #e74c3c;
    font-size: 1.2rem;
  }
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <SLink to="/" className="AppName">
        ShigatsuFlix
      </SLink>
      <Item current={pathname === "/movie"}>
        <SLink to="/movie">Movies</SLink>
      </Item>
      <Item current={pathname === "/show"}>
        <SLink to="/show">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
