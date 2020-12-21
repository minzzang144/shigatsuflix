import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;
  width: calc((100vw - 140px) / 8);
  font-size: 12px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  height: 250px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Season = ({ imageUrl, title }) => (
  <Container>
    <ImageContainer>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
            : "/noPosterSmall.png"
        }
      ></Image>
    </ImageContainer>
    <Title>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</Title>
  </Container>
);

Season.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Season;
