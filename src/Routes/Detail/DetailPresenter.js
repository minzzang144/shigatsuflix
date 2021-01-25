import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "components/Loader";
import PostTabData from "system/PostTabData";
import theme from "Styles/Theme";
import Content from "components/Content";

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

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px 50px 50px 50px;
  @media ${(props) => props.theme.tablet} {
    height: 100vh;
  }
  @media ${(props) => props.theme.mobile} {
    height: unset;
  }
`;

const DetailPresenter = forwardRef(
  (
    { result, credit, recommandation, similarity, isMovie, loading },
    { trailerRef }
  ) => {
    return loading ? (
      <>
        <Helmet>
          <title>Loading | ShigatsuFlix</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <Container theme={theme}>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | ShigatsuFlix
          </title>
        </Helmet>
        <BackDrop
          bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
        />
        <PostTabData
          result={result}
          credit={credit}
          recommandation={recommandation}
          similarity={similarity}
          isMovie={isMovie}
          ref={{ trailerRef }}
        />
        <Content result={result} />
      </Container>
    );
  }
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  credit: PropTypes.object,
  recommandation: PropTypes.array,
  similarity: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
};

export default DetailPresenter;
