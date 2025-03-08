import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

// COMPONENTS
import Loader from "../common/Loader";
import { Add, Background, Buttons, Container, Description, GroupWatch, LoaderContainer, Play, Subtitle, Title, Trailer } from "./styled";

const Detail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const singleDoc = doc(db, "movies", id);
      const docSnap = await getDoc(singleDoc);

      if (docSnap.exists) {
        setMovie(docSnap.data());
        document.title = `Disney+ clone - ${docSnap.data().title}`;
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
        <Add>
          <span>+</span>
        </Add>
        <GroupWatch>
          <img src="../images/group-icon.png" alt="trailer" />
        </GroupWatch>
      </Buttons>

      <Subtitle>{movie.subTitle}</Subtitle>

      <Description>{movie.description}</Description>
    </Container>
  );
};

export default Detail;

