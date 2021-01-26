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

const Actor = ({ credit }) => {
  return (
    <>
      <Title>Actor</Title>
      <Box>
        {credit.cast && credit.cast.length > 0
          ? credit.cast.map((actor, index) =>
              index < 15 ? (
                <Poster
                  key={actor.credit_id || index}
                  id={actor.id || index}
                  imageUrl={actor.profile_path}
                  info={actor.original_name}
                  subInfo={`Star as ${actor.character}`}
                  isFilm={true}
                  isSubInfo={true}
                />
              ) : null
            )
          : "Not found information"}
        {credit.cast.length > 15 ? (
          <LastList>
            <LastListTitle>+ {credit.cast.length - 15} Actors</LastListTitle>
          </LastList>
        ) : null}
      </Box>
    </>
  );
};

Actor.propTypes = {
  credit: PropTypes.object,
};

export default Actor;
