import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const PLink = styled(Link)`
  &.slide-in {
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s;
  }
  &.top-position {
    transform: translateY(-30%);
  }
  &.bottom-position {
    transform: translateY(30%);
  }
  &.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0%);
  }
  &.recommandation__poster {
    width: calc((100vw - 140px) / 8);
  }
`;

const Container = styled.div`
  padding: 5px;
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  height: 250px;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  @keyframes rotateImage {
    0% {
      transform: rotate(0) translateY(0) scale(1);
    }
    10% {
      transform: rotate(0) translateY(0) scale(1);
    }
    33% {
      transform: rotate(-3deg) translateY(-2%) scale(1.03);
    }

    66% {
      transform: rotate(3deg) translateY(-2%) scale(1.03);
    }
    90% {
      transform: rotate(0) translateY(0) scale(1);
    }
    100% {
      transform: rotate(0) translateY(0) scale(1);
    }
  }
  position: relative;
  margin-bottom: 5px;
  &:hover {
    animation: rotateImage 1s linear infinite;
    // styled components는 아래의 방법처럼 컴포넌트를 가져와 css하는 방법도 있다.
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  &.recommandation__year {
    color: black;
  }
`;

const Poster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
  isFilm = false,
}) => (
  <PLink
    to={isMovie ? `/movie/${id}` : `/show/${id}`}
    className={isFilm ? "recommandation__poster" : "slide-in"}
  >
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
              : "/noPosterSmall.png"
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 20 ? `${title.substring(0, 20)}...` : title}
      </Title>
      <Year className={isFilm ? "recommandation__year" : null}>{year}</Year>
    </Container>
  </PLink>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
