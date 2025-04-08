import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyList = () => {
  const myList = useSelector((state) => state.myList.myList);

  console.log(myList);

  return (
    <Container>
      <h2>Moja lista</h2>
      {myList.length === 0 ? <p>Brak filmów w liście</p> : null}
      <Content>
        {myList.map((movie, key) => (
          <MovieCard key={key}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </MovieCard>
        ))}
      </Content>
    </Container>
  );
};

export default MyList;

const Container = styled.div`
  padding: 0px calc(5px + 3.5vw);
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  &:before {
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const MovieCard = styled.div`
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
