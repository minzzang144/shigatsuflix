import React from "react";
import styled from "styled-components";
import Poster from "./Poster";

const Button = styled.button`
  color: #e74c3c;
  font-size: 20px;
  background: rgba(20, 20, 20, 0.7);
  margin: 0px 20px 20px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;

const DropDown = styled.div`
  position: absolute;
  transform: translate(-75px, 50px);
  padding: 25px 10px 10px 20px;
  max-width: calc(100vw - 100px);
  max-height: calc(100vh - 150px);
`;

// absolute위치는 Dropdown Box를 기준으로 한다.(Dropdown + Ul > Li > Content)
const Wrapper = styled.div`
  display: none;
  opacity: 0;
  transition: all 0.5s;
  will-change: opacity;
  &.film__content {
    color: black;
    overflow-x: hidden;
    overflow-y: auto;
    max-width: calc(100vw - 140px);
    max-height: calc(100vh - 185px);
    scrollbar-color: #8ec5fc #f5f5f5;
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar {
      width: 12px;
      border-radius: 10px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(#30cfd0),
        to(#330867)
      );
      background-image: -webkit-linear-gradient(
        bottom,
        #30cfd0 0%,
        #330867 100%
      );
      background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    }
  }
`;

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

const Li = styled.li`
  display: flex;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
  &.trigger-enter {
    ${Wrapper} {
      display: flex;
      flex-direction: column;
    }
  }
  &.trigger-enter-active {
    ${Wrapper} {
      opacity: 1;
    }
  }
  &:hover {
    ${Button} {
      color: rgba(20, 20, 20);
      background-color: rgba(255, 255, 255);
    }
  }
`;

const FilmTab = ({ result, credit, recommandation, similarity, isMovie }) => {
  return (
    <Li className="filmList">
      <Button>Film</Button>
      <DropDown className="dropdown">
        <Wrapper className="film__content">
          {!isMovie ? (
            // show Detail Tab에서만 보이는 Poster Component
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
                    <LastListTitle>
                      + {result.seasons.length - 7} Seasons
                    </LastListTitle>
                  </LastList>
                ) : null}
              </Box>
            </>
          ) : null}

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
                <LastListTitle>
                  + {credit.cast.length - 15} Actors
                </LastListTitle>
              </LastList>
            ) : null}
          </Box>

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

          <Title>Production</Title>
          <Box>
            {result.production_companies &&
            result.production_companies.length > 0
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

          <Title>{isMovie ? "Recommand Movies" : "Recommand TV shows"}</Title>
          <Box>
            {isMovie
              ? recommandation && recommandation.length > 0
                ? // Movie Detail Tab에서만 보이는 Poster Component
                  recommandation.map((movie) => (
                    <Poster
                      key={movie.id}
                      id={movie.id}
                      info={movie.original_title}
                      imageUrl={movie.poster_path}
                      rating={movie.vote_average}
                      subInfo={movie.release_date.substring(0, 4)}
                      isMovie={true}
                      isFilm={true}
                      isClick={true}
                      isSubInfo={true}
                    />
                  ))
                : "Not found information"
              : recommandation && recommandation.length > 0
              ? // show Detail Tab에서만 보이는 Poster Component
                recommandation.map((show) => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    info={show.original_name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    subInfo={show.first_air_date.substring(0, 4)}
                    isFilm={true}
                    isClick={true}
                    isSubInfo={true}
                  />
                ))
              : "Not found information"}
          </Box>

          <Title>{isMovie ? "Similar Movies" : "Similar TV shows"}</Title>
          <Box>
            {isMovie
              ? similarity && similarity.length > 0
                ? // Movie Detail Tab에서만 보이는 Poster Component
                  similarity.map((movie) => (
                    <Poster
                      key={movie.id}
                      id={movie.id}
                      info={movie.original_title}
                      imageUrl={movie.poster_path}
                      rating={movie.vote_average}
                      subInfo={movie.release_date.substring(0, 4)}
                      isMovie={true}
                      isFilm={true}
                      isClick={true}
                      isSubInfo={true}
                    />
                  ))
                : "Not found information"
              : similarity && similarity.length > 0
              ? // show Detail Tab에서만 보이는 Poster Component
                similarity.map((show) => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    info={show.original_name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    subInfo={show.first_air_date.substring(0, 4)}
                    isFilm={true}
                    isClick={true}
                    isSubInfo={true}
                  />
                ))
              : "Not found information"}
          </Box>
        </Wrapper>
      </DropDown>
    </Li>
  );
};

export default FilmTab;
