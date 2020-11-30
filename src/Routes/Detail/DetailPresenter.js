import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px 50px 50px 50px;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <BackDrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
