import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "components/Loader";
import Message from "components/Message";
import Slide from "components/Slide";
import Card from "components/Card";

const Container = styled.div``;

const HomePresenter = ({ nowPlaying, topRated, match, loading, error }) => (
  <>
    <Helmet>
      <title>Home | ShigatsuFlix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Slide>
          {nowPlaying &&
            nowPlaying.length > 0 &&
            nowPlaying.map((movie, index) => (
              <Card
                key={movie.id}
                id={movie.id}
                index={index}
                bgImage={match ? movie.poster_path : movie.backdrop_path}
                title={movie.original_title}
                overview={movie.overview}
                isMovie={true}
              />
            ))}
        </Slide>
        <Slide bottom={true}>
          {topRated &&
            topRated.length > 0 &&
            topRated.map((show, index) => (
              <Card
                key={show.id}
                id={show.id}
                index={index}
                bgImage={match ? show.poster_path : show.backdrop_path}
                title={show.original_name}
                overview={show.overview}
              />
            ))}
        </Slide>
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  topRated: PropTypes.array,
  match: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
