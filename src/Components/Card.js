import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ItemList = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  perspective: 660px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Item = styled.div`
  min-width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  &:nth-child(even) {
    transform: rotateY(35deg);
  }
  &:nth-child(odd) {
    transform: rotateY(-35deg);
  }
`;

const Title = styled.span``;

const Overview = styled.p``;

const Card = ({ nowPlaying }) => (
  <ItemList>
    {nowPlaying.map((movie) => (
      <Item
        key={movie.id}
        bgImage={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      >
        <Title>{movie.original_title}</Title>
        <Overview>{movie.overview}</Overview>
      </Item>
    ))}
  </ItemList>
);

Card.propTypes = {
  nowPlaying: PropTypes.array.isRequired,
};

export default Card;
