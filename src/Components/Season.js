import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Poster from "./Poster";

const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1.5rem;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 160px);
`;

const LastList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100vw - 180px) / 8);
  height: 250px;
`;

const LastListTitle = styled.div``;

const Season = ({ result }) => {
  return (
    <>
      <Title>Seasons</Title>
      <Box>
        {result && result.seasons.length > 0
          ? result.seasons.map((season, index) =>
              index < 7 ? (
                <Poster
                  key={season.id || index}
                  id={season.id || index}
                  imageUrl={season.poster_path}
                  info={season.name}
                  isFilm={true}
                />
              ) : null
            )
          : "No more Seasons"}
        {result.seasons.length > 7 ? (
          <LastList>
            <LastListTitle>+ {result.seasons.length - 7} Seasons</LastListTitle>
          </LastList>
        ) : null}
      </Box>
    </>
  );
};

Season.propTypes = {
  result: PropTypes.object,
};

export default Season;
