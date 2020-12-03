import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  ${Title} {
    margin: 150px 0px 10px 0px;
  }
  &:nth-child(odd) {
    transform: rotateY(-40deg);
    ${Overview} {
      margin-left: 50%;
    }
  }
  &:nth-child(even) {
    transform: rotateY(40deg);
    text-align: left;
    ${Overview} {
      width: 50%;
    }
  }
`;

const Card = ({ id, index, bgImage, title, overview }) => {
  const item = useRef([]);
  return (
    <Item
      ref={(el) => (item.current[index] = el)}
      bgImage={`https://image.tmdb.org/t/p/original/${bgImage}`}
    >
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </Item>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  bgImage: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
};

export default Card;
