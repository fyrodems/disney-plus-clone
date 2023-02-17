import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid white;
  border-right: 3px solid transparent;
  box-sizing: border-box;
      animation: rotation 700ms linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
`;

export default Loader;
