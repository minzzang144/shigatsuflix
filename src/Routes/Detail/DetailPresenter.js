import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "components/Loader";
import Tab from "components/Tab";
import theme from "Styles/Theme";

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
`;

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
  width: 100%;
  height: 100vh;
  padding: 100px 50px 50px 50px;
  @media ${(props) => props.theme.tablet} {
    height: 100vh;
    ${Cover} {
      width: 40%;
    }
    ${Data} {
      width: 60%;
    }
  }
  @media ${(props) => props.theme.mobile} {
    height: unset;
    ${Content} {
      flex-direction: column;
    }
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

const DetailPresenter = ({
  result,
  credit,
  recommandation,
  similarity,
  isMovie,
  loading,
  error,
}) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | ShigatsuFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container theme={theme}>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | ShigatsuFlix
        </title>
      </Helmet>
      <BackDrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      />
      <Tab
        result={result}
        credit={credit}
        recommandation={recommandation}
        similarity={similarity}
        isMovie={isMovie}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : "/noPosterSmall.png"
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
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
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  credit: PropTypes.object,
  recommandation: PropTypes.array,
  similarity: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
