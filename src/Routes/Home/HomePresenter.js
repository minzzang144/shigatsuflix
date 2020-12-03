import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Card from "Components/Card";

const Container = styled.div``;

const Slide = styled.div`
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  perspective: 55vw;
`;

const ItemList = styled.div`
  display: flex;
  width: calc(100% * 20);
  animation: slide 120s ease-in-out infinite;
  @keyframes slide {
    0% {
      margin-left: -17%;
    }
    3% {
      margin-left: -17%;
    }
    5% {
      margin-left: -90%;
    }
    8% {
      margin-left: -90%;
    }
    10% {
      margin-left: -217%;
    }
    13% {
      margin-left: -217%;
    }
    15% {
      margin-left: -290%;
    }
    18% {
      margin-left: -290%;
    }
    20% {
      margin-left: -417%;
    }
    23% {
      margin-left: -417%;
    }
    25% {
      margin-left: -490%;
    }
    28% {
      margin-left: -490%;
    }
    30% {
      margin-left: -617%;
    }
    33% {
      margin-left: -617%;
    }
    35% {
      margin-left: -690%;
    }
    38% {
      margin-left: -690%;
    }
    40% {
      margin-left: -817%;
    }
    43% {
      margin-left: -817%;
    }
    45% {
      margin-left: -890%;
    }
    48% {
      margin-left: -890%;
    }
    50% {
      margin-left: -1017%;
    }
    53% {
      margin-left: -1017%;
    }
    55% {
      margin-left: -1090%;
    }
    58% {
      margin-left: -1090%;
    }
    60% {
      margin-left: -1217%;
    }
    63% {
      margin-left: -1217%;
    }
    65% {
      margin-left: -1290%;
    }
    68% {
      margin-left: -1290%;
    }
    70% {
      margin-left: -1417%;
    }
    73% {
      margin-left: -1417%;
    }
    75% {
      margin-left: -1490%;
    }
    78% {
      margin-left: -1490%;
    }
    80% {
      margin-left: -1617%;
    }
    83% {
      margin-left: -1617%;
    }
    85% {
      margin-left: -1690%;
    }
    88% {
      margin-left: -1690%;
    }
    90% {
      margin-left: -1817%;
    }
    93% {
      margin-left: -1817%;
    }
    95% {
      margin-left: -1890%;
    }
    98% {
      margin-left: -1890%;
    }
    100% {
      margin-left: 0%;
    }
  }
`;

const HomePresenter = ({ nowPlaying, topRated, loading, error }) => (
  <>
    <Helmet>
      <title>Home | ShigatsuFlix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Slide>
          <ItemList>
            {nowPlaying &&
              nowPlaying.length > 0 &&
              nowPlaying.map((movie, index) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  index={index}
                  bgImage={movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                />
              ))}
          </ItemList>
        </Slide>
        {topRated && topRated.length > 0 && (
          <Section title="Popular">
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  topRated: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
