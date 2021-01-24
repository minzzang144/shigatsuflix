import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "Styles/Theme";

const Container = styled.div`
  padding: 5px;
  font-size: 12px;
  &.film__container {
    &:nth-child(8n + 1) {
      padding: 5px 5px 5px 0;
    }
    &:nth-child(8n) {
      padding: 5px 0 5px 5px;
    }
  }
`;

const Image = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.bgUrl})`,
  },
}))`
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
  &.film__rating {
    color: white;
  }
`;

const Info = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const SubInfo = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  &.film__year {
    color: black;
    font-weight: 600;
  }
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
  &.film__poster {
    width: calc((100vw - 160px) / 8);
    opacity: 1;
    pointer-events: none;
  }
  &.clickable__poster {
    pointer-events: auto;
    ${SubInfo} {
      font-weight: unset;
    }
  }
  @media ${(props) => props.theme.tablet} {
    &.film__poster {
      width: calc((100vw - 160px) / 4);
    }
  }
  @media ${(props) => props.theme.mobile} {
    &.film__poster {
      width: calc((100vw - 160px) / 2);
    }
  }
  @media ${(props) => props.theme.deviceMobile} {
    &.film__poster {
      width: calc(100vw - 160px);
    }
  }
`;

const Poster = ({
  id,
  imageUrl,
  info,
  rating,
  subInfo,
  isMovie = false,
  isFilm = false,
  isClick = false,
  isSubInfo = false,
}) => (
  <PLink
    to={isClick ? (isMovie ? `/movie/${id}` : `/show/${id}`) : ""}
    className={
      (isFilm ? "film__poster" : "slide-in") +
      (isClick ? " clickable__poster" : "")
    }
    theme={theme}
  >
    <Container className={isFilm ? "film__container" : ""}>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
              : "/noPosterSmall.png"
          }
        />
        {isClick ? (
          <Rating className={isFilm ? "film__rating" : null}>
            <span role="img" aria-label="rating">
              ⭐
            </span>
            {rating}/10
          </Rating>
        ) : null}
      </ImageContainer>
      <Info>{info.length > 20 ? `${info.substring(0, 20)}...` : info}</Info>
      {isSubInfo ? (
        <SubInfo className={isFilm ? "film__year" : null}>{subInfo}</SubInfo>
      ) : null}
    </Container>
  </PLink>
);

Poster.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  info: PropTypes.string,
  rating: PropTypes.number,
  subInfo: PropTypes.string,
  isMovie: PropTypes.bool,
  isFilm: PropTypes.bool,
};

export default Poster;
