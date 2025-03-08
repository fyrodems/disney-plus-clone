/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Recomended from "./Recommended";
import Newest from "./Newest";
import Originals from "./Originals";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { db /*firebaseApp*/ } from "../../firebase";
// import { collection, addDoc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recomended = [];
  let newest = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recomended = [...recomended, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newest = [...newest, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recomended: recomended,
          newest: newest,
          originals: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recomended />
      <Newest />
      <Originals />
      <Trending />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

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
`;
