import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// DB
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../../features/movie/myListSlice";

// COMPONENTS
import Loader from "../common/Loader";
import {
  Add,
  Background,
  Buttons,
  Container,
  Description,
  GroupWatch,
  LoaderContainer,
  Play,
  Subtitle,
  Title,
  Trailer,
} from "./styled";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const myList = useSelector((state) => state.myList.myList);
  const isAdded = myList.some((item) => item.title === movie.title);

  const handleToggleList = () => {
    if (isAdded) {
      dispatch(removeFromList(movie.title));
    } else {
      dispatch(addToList(movie));
    }
  };

  useEffect(() => {
    (async () => {
      const singleDoc = doc(db, "movies", id);
      const docSnap = await getDoc(singleDoc);

      if (docSnap.exists) {
        setMovie({ ...docSnap.data(), id });
      }
    })();
  }, [id]);

  if (!movie)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );

  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} alt={movie.title} />
      </Background>
      <Title>
        <img src={movie.titleImg} alt={movie.title} />
      </Title>
      <Buttons>
        <Play>
          <img src="../images/play-icon-black.png" alt="play" />
          <span>play</span>
        </Play>
        <Trailer>
          <img src="../images/play-icon-white.png" alt="trailer" />
          <span>trailer</span>
        </Trailer>
        <Buttons>
          <Add onClick={handleToggleList}>
            <span>{isAdded ? "✓" : "+"}</span>
          </Add>
          <GroupWatch>
            <img src="../images/group-icon.png" alt="trailer" />
          </GroupWatch>
        </Buttons>
      </Buttons>

      <Subtitle>{movie.subTitle}</Subtitle>

      <Description>{movie.description}</Description>
    </Container>
  );
};

export default Detail;
