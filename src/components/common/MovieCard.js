import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCard = (link, src, alt) => {
  return (
    <Wrapper>
      <Link to={link}>
        <img src={src} alt={alt} />
      </Link>
    </Wrapper>
  );
};

export default MovieCard;

const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
