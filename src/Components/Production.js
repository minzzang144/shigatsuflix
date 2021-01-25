import React from "react";
import styled from "styled-components";
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

const Production = ({ result }) => {
  return (
    <>
      <Title>Production</Title>
      <Box>
        {result.production_companies && result.production_companies.length > 0
          ? result.production_companies.map((company, index) =>
              index < 7 ? (
                <Poster
                  key={company.id || index}
                  id={company.id || index}
                  imageUrl={company.logo_path}
                  info={company.name}
                  subInfo={`From ${company.origin_country}`}
                  isFilm={true}
                  isSubInfo={true}
                />
              ) : null
            )
          : "Not found information"}
        {result.production_companies > 7 ? (
          <LastList>
            <LastListTitle>
              + {result.production_companies - 7} Companies
            </LastListTitle>
          </LastList>
        ) : null}
      </Box>
    </>
  );
};

export default Production;
