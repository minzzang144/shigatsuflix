import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-top: 70px;
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
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={updateInput}
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Show Results">
            {tvResults.map((show) => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
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
