import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="./images/viewers-disney.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="./videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-pixar.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="./videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-marvel.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="./videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-starwars.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="./videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="./images/viewers-national.png" alt="" />
        <video muted={true} autoPlay={true} loop={true} playsInline={true}>
          <source src="./videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  position relative;
  overflow: hidden;

  img {
    inset: 0px;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    opacity: 1;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 1;
    z-index: -10;
    transform: scale(1.05);
  }
`;
