import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "system/PostSectionData";
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
            <Section title="Top Rated Shows">
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
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Shows">
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
            </Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
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
            </Section>
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
