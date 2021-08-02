import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  &.search__loader {
    position: absolute;
    top: 0;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: calc(100vh - 120px);
`;

const SLink = styled.a`
  margin-top: 10px;
  font-size: 0.8rem;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ isSearch = false }) => (
  <Container className={isSearch ? "search__loader" : ""}>
    <Image bgUrl="/loading.gif"></Image>
    <SLink href="https://acegif.com/gifs-loading/" target="_blank">
      Acegif ©
    </SLink>
  </Container>
);
