import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Overview = styled.p`
  opacity: 0.8;
  line-height: 1.5;
`;

const Item = styled.div`
  min-width: calc(100% / 20);
  height: 100vh;
  padding: 100px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  text-align: right;
  white-space: normal;
  &:nth-child(odd) {
    transform: rotateY(-40deg);
    ${Title} {
      margin: 150px 0px 10px 0px;
    }
    ${Overview} {
      margin-left: 50%;
    }
  }
  &:nth-child(even) {
    transform: rotateY(40deg);
    text-align: left;
    ${Title} {
      margin: 200px 0px 10px 0px;
    }
    ${Overview} {
      width: 50%;
    }
  }
`;

const Card = ({ nowPlaying }) => {
  const item = useRef([]);
  const rightSlideIn = () => {
    setInterval(() => {
      // console.log(item);
      // item.current.map(
      //   (el) => (el.style.transition = "transform 0.5s ease-in-out")
      // );
    }, 3000);
  };
  return (
    <Slide>
      <ItemList>
        {nowPlaying.map((movie, index) => (
          <Item
            ref={(el) => (item.current[index] = el)}
            key={movie.id}
            bgImage={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          >
            <Title>{movie.original_title}</Title>
            <Overview>{movie.overview}</Overview>
          </Item>
        ))}
        {rightSlideIn()}
      </ItemList>
    </Slide>
  );
};

Card.propTypes = {
  nowPlaying: PropTypes.array.isRequired,
};

export default Card;
