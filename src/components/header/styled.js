import styled from "styled-components";

export const NavigationBar = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  justify-content: space-between;
`;
export const Logo = styled.span`
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

export const NavigationMenu = styled.div`
  display: none;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  @media (min-width: 600px) {
    display: flex;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 99px;
  justify-content: flex-end;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Login = styled.div`
  border-radius: 4px;
  border: 1px solid #f9f9f9;
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
export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const DropDown = styled.div`
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

export const SignOut = styled.div`
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

/** nav item */

export const Link = styled.span`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 13px;
  cursor: pointer;

  &:hover span:after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: 20px;
  margin-right: 5px;
`;

export const Text = styled.span`
  font-size: 13px;
  letter-spacing: 1.42px;
  position: relative;

  &:after {
    content: "";
    height: 2px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    opacity: 0;
    transform-origin: left center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transform: scaleX(0);
  }
`;
