import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";

// REDUX
import {
  selectUserName,
  selectUserImg,
  setUserLogin,
  setSignOut,
} from "../../features/user/userSlice";

// COMPONENTS
import NavigationItem from "./NavigationItem";

// STYLES
import {
  DropDown,
  Login,
  LoginContainer,
  Logo,
  NavigationBar,
  NavigationMenu,
  SignOut,
  UserDetails,
  UserImage,
} from "./styled";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userImg = useSelector(selectUserImg);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
          })
        );
        navigate("/home");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((res) => {
      let user = res.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        })
      );
      navigate("/home");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/");
    });
  };

  return (
    <NavigationBar>
      <Logo href="/home">
        <img alt="disney+" src="../images/logo.svg" />
      </Logo>

      {!userName && !userImg ? (
        <LoginContainer>
          <Login onClick={signIn}>login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavigationMenu>
            <NavigationItem
              href={"/home"}
              src={"./images/home-icon.svg"}
              text={"strona główna"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/search-icon.svg"}
              text={"wyszukaj"}
            />
            <NavigationItem
              href={"/myList"}
              src={"./images/watchlist-icon.svg"}
              text={"moja lista"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/original-icon.svg"}
              text={"originals"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/movie-icon.svg"}
              text={"filmy"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/series-icon.svg"}
              text={"seriale"}
            />
          </NavigationMenu>

          <SignOut>
            <UserDetails>
              {userName.split(" ")[0]}
              <UserImage
                // onClick={signOut}
                src={userImg}
                alt={userName}
              ></UserImage>
            </UserDetails>
            <DropDown onClick={signOut}>Sign out</DropDown>
          </SignOut>
        </>
      )}
    </NavigationBar>
  );
};

export default Header;
