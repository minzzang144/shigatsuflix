import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import PostSectionData from "system/PostSectionData";
import Loader from "components/Loader";
import Message from "components/Message";
import Poster from "components/Poster";

const Container = styled.div`
  padding: 70px 20px 0px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 1.5rem;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateInput,
}) => (
  <>
    <Helmet>
      <title>Search | ShigatsuFlix</title>
    </Helmet>
    {
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={updateInput}
            placeholder="Search Movies or TV Shows..."
            value={searchTerm}
          ></Input>
        </Form>
        {loading ? (
          <Loader isSearch={true} />
        ) : (
          <>
            {movieResults && movieResults.length > 0 && (
              <PostSectionData title="Movie Results">
                {movieResults.map((movie) => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    info={movie.original_title}
                    imageUrl={movie.poster_path}
                    rating={movie.vote_average}
                    subInfo={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                    isClick={true}
                    isSubInfo={true}
                  />
                ))}
              </PostSectionData>
            )}
            {tvResults && tvResults.length > 0 && (
              <PostSectionData title="Show Results">
                {tvResults.map((show) => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    info={show.original_name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    subInfo={
                      show.first_air_date && show.first_air_date.substring(0, 4)
                    }
                    isClick={true}
                    isSubInfo={true}
                  />
                ))}
              </PostSectionData>
            )}
            {error && <Message text={error} color="#e74c3c" />}
            {movieResults &&
              tvResults &&
              movieResults.length === 0 &&
              tvResults.length === 0 && (
                <Message text="Nothing Found" color="#95a5a6" />
              )}
          </>
        )}
      </Container>
    }
  </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default SearchPresenter;
