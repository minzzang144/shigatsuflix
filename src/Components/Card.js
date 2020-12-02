import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ItemList = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  perspective: 55vw;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Overview = styled.p``;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 100px;
  min-width: 100%;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  text-align: right;
  white-space: normal;
  &:nth-child(odd) {
    transform: rotateY(-40deg) translateX(-180px);
    ${Title} {
      margin: 150px 0px 10px 0px;
    }
    ${Overview} {
      margin-left: 50%;
      opacity: 0.8;
      line-height: 1.5;
    }
  }
  &:nth-child(even) {
    transform: rotateY(40deg) translateX(-180px);
    text-align: left;
    ${Title} {
      margin: 200px 0px 10px 0px;
    }
    ${Overview} {
      width: 50%;
      opacity: 0.8;
      line-height: 1.5;
    }
  }
`;

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
