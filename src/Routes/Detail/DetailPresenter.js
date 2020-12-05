import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px 50px 50px 50px;
`;

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

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | ShigatsuFlix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | ShigatsuFlix
        </title>
      </Helmet>
      <BackDrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
