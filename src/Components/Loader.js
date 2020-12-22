import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: calc(100vh - 120px);
`;

const SLink = styled(Link)`
  margin-top: 10px;
  font-size: 0.8rem;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Image bgUrl="/loading.gif"></Image>
    <SLink href="https://acegif.com/gifs-loading/" target="_blank">
      Acegif ©
    </SLink>
  </Container>
);
