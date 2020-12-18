import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Poster from "Components/Poster";

// Tab Container(Detail Screen 상단에 위치) + 부모 relative는 DetailPresenter의 Content가 가지고 있음
const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 60px;
  left: 50%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  transform: translate(-50%);
  &.tab__container {
    visibility: visible;
    opacity: 1;
  }
`;

const Nav = styled.nav``;

// DropDown Box(Content 크기에 맞게 Background가 설정될 예정) + Tab 컴포넌트의 Container를 기준으로 absolute위치를 가진다.
const DropDownBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  background: rgba(255, 255, 255);
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  opacity: 0;
  // Nav Button에 mouseenter이벤트 발생 시 생길 transition이다.
  &.open {
    opacity: 1;
  }
`;

const Arrow = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  background: rgba(255, 255, 255);
  transform: translate(380%, -50%) rotate(45deg);
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

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
  // Trailer Content만 Modal 효과를 주었다.
  &.trailer__content {
    position: absolute;
    top: -50px;
    transform: translate(60px, 100px);
    justify-content: center;
    align-items: center;
    width: calc(100vw - 100px);
    height: calc(100vh - 150px);
    background-color: rgba(20, 20, 20, 0.7);
  }
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

// absolute기준은 Content이다.(Content > Close)
const Close = styled.i`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Trailer = styled.div``;

const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1.5rem;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Box = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 140px);
`;

const BoxList = styled.li`
  padding: 5px;
  &:nth-child(8n + 1) {
    padding: 5px 5px 5px 0;
  }
  &:nth-child(8n) {
    padding: 5px 0 5px 5px;
  }
`;

const LastList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100vw - 220px) / 8);
  height: 250px;
`;

const LastListTitle = styled.div``;

const Photo = styled.div`
  width: calc((100vw - 220px) / 8);
  height: 250px;
  border-radius: 3px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Info = styled.span`
  display: block;
  width: calc((100vw - 220px) / 8);
  line-height: 1.3rem;
  &.actor__name {
    margin-top: 5px;
  }
`;

const HighLight = styled.span`
  font-weight: 600;
`;

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

const Tab = ({ result, credit, recommandation, isMovie }) => {
  return (
    <Container className="tabContainer">
      <Nav className="nav">
        <DropDownBox className="dropDownBg">
          <Arrow></Arrow>
        </DropDownBox>
        <Ul className="triggers">
          <Li className="trailerList">
            <Button>Trailer</Button>
            <Wrapper className="trailer__content">
              <Close className="fas fa-times" />
              {result.videos.results[0] ? (
                <>
                  <Trailer id="player" />
                </>
              ) : (
                "There are no trailers found."
              )}
            </Wrapper>
          </Li>
          <Li className="filmList">
            <Button>Film</Button>
            <DropDown className="dropdown">
              <Wrapper className="film__content">
                <Title>Actor</Title>
                <Box>
                  {credit.cast && credit.cast.length > 0
                    ? credit.cast.map((actor, index) =>
                        index < 15 ? (
                          <BoxList key={actor.cast_id}>
                            <Photo
                              bgImage={
                                actor.profile_path
                                  ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                                  : "/noPosterSmall.png"
                              }
                            ></Photo>
                            <Info className="actor__name">{`${actor.original_name}`}</Info>
                            <Info>
                              Star as <HighLight>{actor.character}</HighLight>
                            </Info>
                          </BoxList>
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
                          <BoxList key={crew.credit_id}>
                            <Photo
                              bgImage={
                                crew.profile_path
                                  ? `https://image.tmdb.org/t/p/original${crew.profile_path}`
                                  : "/noPosterSmall.png"
                              }
                            ></Photo>
                            <Info className="actor__name">{`${crew.original_name}`}</Info>
                            <Info>
                              Role as <HighLight>{crew.job}</HighLight>
                            </Info>
                          </BoxList>
                        ) : null
                      )
                    : "Not found information"}
                  {credit.crew.length > 15 ? (
                    <LastList>
                      <LastListTitle>
                        + {credit.crew.length - 15} Crew
                      </LastListTitle>
                    </LastList>
                  ) : null}
                </Box>
                <Title>
                  {isMovie ? "Recommand Movies" : "Recommand TV shows"}
                </Title>
                <Box>
                  {isMovie
                    ? recommandation && recommandation.length > 0
                      ? // Movie Detail에서만 보이는 Poster Component
                        recommandation.map((movie) => (
                          <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                            isFilm={true}
                          />
                        ))
                      : "Not found information"
                    : recommandation && recommandation.length > 0
                    ? // show Detail에서만 보이는 Poster Component
                      recommandation.map((show) => (
                        <Poster
                          key={show.id}
                          id={show.id}
                          title={show.original_name}
                          imageUrl={show.poster_path}
                          rating={show.vote_average}
                          year={show.first_air_date.substring(0, 4)}
                          isFilm={true}
                        />
                      ))
                    : "Not found information"}
                </Box>
              </Wrapper>
            </DropDown>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
};

Tab.propTypes = {
  result: PropTypes.object,
  cast: PropTypes.object,
  recommandation: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
};

export default Tab;
