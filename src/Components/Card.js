import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  text-shadow: 1px 1px 2px blue, 0 0 1em red, 0 0 0.2em red;
`;

const Overview = styled.p`
  margin-bottom: 20px;
  opacity: 0.8;
  line-height: 1.5;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
`;

const LinkArrow = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  left: 50%;
  background-color: #e74c3c;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const CardLink = styled(Link)`
  border-radius: 5px;
  padding: 2px 13px;
  position: relative;
  font-size: 1.3rem;
  color: rgba(20, 20, 20, 0.8);
  background-color: #e74c3c;
  &:hover {
    color: white;
    background-color: rgba(20, 20, 20, 1);
    ${LinkArrow} {
      background-color: rgba(20, 20, 20, 1);
    }
  }
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

const pauseAnimation = () => {
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    slider.style.cssText = "animation-play-state: paused;";
  });
};

const playAnimation = () => {
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    slider.style.cssText = "animation-play-state: play;";
  });
};

const Card = ({ id, index, bgImage, title, overview, isMovie = false }) => {
  const item = useRef([]);
  return (
    <Item
      ref={(el) => (item.current[index] = el)}
      bgImage={`https://image.tmdb.org/t/p/original/${bgImage}`}
    >
      <Title>{title}</Title>
      <Overview>
        {overview.length > 300 ? `${overview.substring(0, 400)}...` : overview}
      </Overview>
      <CardLink
        to={isMovie ? `/movie/${id}` : `/show/${id}`}
        onMouseEnter={pauseAnimation}
        onMouseLeave={playAnimation}
      >
        Detail<LinkArrow></LinkArrow>
      </CardLink>
    </Item>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  bgImage: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Card;
