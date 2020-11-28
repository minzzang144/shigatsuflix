import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>
);
