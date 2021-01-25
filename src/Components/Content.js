import React from "react";
import styled from "styled-components";
import theme from "Styles/Theme";

const Cover = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Data = styled.div`
  width: 50%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Item = styled.span`
  line-height: 1.3;
`;

const IMDB = styled.a`
  margin-left: 10px;
  width: 40px;
  height: 20px;
`;

const IMDBImg = styled.img`
  width: 40px;
  height: 20px;
`;

const Divider = styled.span`
  margin: 0px 10px;
`;

const Overview = styled.p`
  width: 70%;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
`;

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  @media ${(props) => props.theme.tablet} {
    ${Cover} {
      width: 40%;
    }
    ${Data} {
      width: 60%;
    }
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    ${Cover} {
      width: 100%;
      height: calc(100vh - 150px);
    }
    ${Data} {
      width: 100%;
    }
    ${Title} {
      margin-top: 50px;
      font-size: 1.4rem;
    }
    ${ItemContainer} {
      margin: 5px 0;
      font-size: 1rem;
    }
    ${Overview} {
      width: 100%;
    }
  }
`;

const Content = ({ result }) => {
  return (
    <Container theme={theme}>
      <Cover
        bgImage={
          result.poster_path
            ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
            : "/noPosterSmall.png"
        }
      />
      <Data>
        <Title>
          {result.original_title ? result.original_title : result.original_name}
        </Title>
        <ItemContainer>
          <Item>
            {result.release_date
              ? result.release_date.substring(0, 4)
              : result.first_air_date.substring(0, 4)}
          </Item>
          <Divider>•</Divider>
          <Item>
            {result.runtime ? result.runtime : result.episode_run_time[0]} min
          </Item>
          <Divider>•</Divider>
          <Item>
            {result.genres &&
              result.genres.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
          </Item>
          {result.imdb_id ? (
            <IMDB
              href={`https://www.imdb.com/title/${result.imdb_id}`}
              target="_blank"
            >
              <IMDBImg src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"></IMDBImg>
            </IMDB>
          ) : null}
        </ItemContainer>
        <Overview>{result.overview}</Overview>
      </Data>
    </Container>
  );
};

export default Content;
