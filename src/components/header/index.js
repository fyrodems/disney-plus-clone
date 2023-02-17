import React, { useEffect } from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";
import {
  selectUserName,
  selectUserImg,
  setUserLogin,
  setSignOut,
} from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";

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
              text={"home"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/search-icon.svg"}
              text={"search"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/watchlist-icon.svg"}
              text={"watchlist"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/original-icon.svg"}
              text={"originals"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/movie-icon.svg"}
              text={"movies"}
            />
            <NavigationItem
              href={"#"}
              src={"./images/series-icon.svg"}
              text={"series"}
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

const NavigationBar = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  justify-content: space-between;
`;
const Logo = styled.a`
  width: 80px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavigationMenu = styled.div`
  display: none;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 99px;
  justify-content: flex-end;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border-radius: 4px;
  border 1px solid #f9f9f9;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const DropDown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.3);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100%;
  opacity: 0;
  transition: 500ms;
  cursor: pointer;
  text-align: center;
`;

const SignOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
    }
  }
`;
