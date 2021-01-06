import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import PostSectionData from "system/PostSectionData";
import Loader from "components/Loader";
import Message from "components/Message";
import Poster from "components/Poster";
import { useGlobalState } from "contexts/tmdbContext";

const Container = styled.div`
  padding: 70px 20px 0px;
`;

const MoviePresenter = ({ loading, error }) => {
  const { nowPlaying, popular, upComing } = useGlobalState();
  return (
    <>
      <Helmet>
        <title>Movie | ShigatsuFlix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <PostSectionData title="Now Playing">
              {nowPlaying.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  info={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  subInfo={movie.release_date.substring(0, 4)}
                  isMovie={true}
                  isClick={true}
                  isSubInfo={true}
                />
              ))}
            </PostSectionData>
          )}
          {popular && popular.length > 0 && (
            <PostSectionData title="Popular">
              {popular.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  info={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  subInfo={movie.release_date.substring(0, 4)}
                  isMovie={true}
                  isClick={true}
                  isSubInfo={true}
                />
              ))}
            </PostSectionData>
          )}
          {upComing && upComing.length > 0 && (
            <PostSectionData title="Up Coming">
              {upComing.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  info={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  subInfo={movie.release_date.substring(0, 4)}
                  isMovie={true}
                  isClick={true}
                  isSubInfo={true}
                />
              ))}
            </PostSectionData>
          )}
          {error && <Message text={error} color="#e74c3c" />}
        </Container>
      )}
    </>
  );
};

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default MoviePresenter;
