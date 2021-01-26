import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "Styles/Theme";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  &.slide-in {
    opacity: 0;
    transition: all 0.5s;
  }
  &.left-position {
    transform: translateX(-30%);
  }
  &.active {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(100% / 8));
  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(auto-fill, calc(100% / 6));
  }
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(auto-fill, calc(100% / 3));
  }
  @media ${(props) => props.theme.deviceMobile} {
    grid-template-columns: repeat(auto-fill, calc(100% / 2));
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title className="left-position slide-in">{title}</Title>
    <Grid theme={theme}>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
