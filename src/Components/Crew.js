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

const Crew = ({ credit }) => {
  return (
    <>
      <Title>Crew</Title>
      <Box>
        {credit.crew && credit.crew.length > 0
          ? credit.crew.map((crew, index) =>
              index < 15 ? (
                <Poster
                  key={crew.credit_id || index}
                  id={crew.id || index}
                  imageUrl={crew.profile_path}
                  info={crew.original_name}
                  subInfo={`Role as ${crew.job}`}
                  isFilm={true}
                  isSubInfo={true}
                />
              ) : null
            )
          : "Not found information"}
        {credit.crew.length > 15 ? (
          <LastList>
            <LastListTitle>+ {credit.crew.length - 15} Crew</LastListTitle>
          </LastList>
        ) : null}
      </Box>
    </>
  );
};

Crew.propTypes = {
  credit: PropTypes.object,
};

export default Crew;
