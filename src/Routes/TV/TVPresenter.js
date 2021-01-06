import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import PostSectionData from "system/PostSectionData";
import Loader from "components/Loader";
import Message from "components/Message";
import Poster from "components/Poster";
import { useGlobalState } from "contexts/tmdbContext";

const Container = styled.div`
  padding: 70px 20px 0px;
`;

const TVPresenter = ({ loading, error }) => {
  const { topRated, popular, airingToday } = useGlobalState();
  return (
    <>
      <Helmet>
        <title>TV Shows | ShigatsuFlix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <PostSectionData title="Top Rated Shows">
              {topRated.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  info={show.original_name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  subInfo={show.first_air_date.substring(0, 4)}
                  isClick={true}
                  isSubInfo={true}
                />
              ))}
            </PostSectionData>
          )}
          {popular && popular.length > 0 && (
            <PostSectionData title="Popular Shows">
              {popular.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  info={show.original_name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  subInfo={show.first_air_date.substring(0, 4)}
                  isClick={true}
                  isSubInfo={true}
                />
              ))}
            </PostSectionData>
          )}
          {airingToday && airingToday.length > 0 && (
            <PostSectionData title="Airing Today">
              {airingToday.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  info={show.original_name}
                  imageUrl={show.poster_path}
                  rating={show.vote_average}
                  subInfo={show.first_air_date.substring(0, 4)}
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
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
