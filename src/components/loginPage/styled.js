import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    background: url("./images/mobile-login-background.jpeg") center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    z-index: -1;

    @media (min-width: 1000px) {
      background: url("./images/desktop-login-background.jpeg") center center /
        cover no-repeat fixed;
    }
  }
`;

export const CTA = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  align-items: center;
  text-align: center;

  @media (min-width: 600px) {
    align-items: flex-start;
    text-align: left;
  }

  img {
    display: block;
    height: auto;
    width: 100%;
    margin-bottom: 2vw;
    max-width: 180px;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  font-weight: 700;
  font-size: 26px;
  line-height: 40px;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    font-size: 44px;
    line-height: 54px;
    font-wight: 500;
  }
`;

export const Description = styled.div`
  letter-spacing: 0.3px;
  font-size: 15px;
  line-height: 30px;

  @media (min-width: 600px) {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  margin: 24px 0;
  display: flex;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  input {
    display: none;

    @media (min-width: 600px) {
      border: none;
      display: block;
      font-size: inherit;
      height: 50px;
      padding: 0 12px;
      border-radius: 4px 0 0 4px;
      width: 100%;
      flex-basis: 70%;
      border-top: 1px solid;

      &:focus {
        outline: none;
      }
    }
  }

  span {
    font-size: 18px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    transition: all 0.2s ease 0s;
    vertical-align: middle;
    background: #0063e5;
    color: #f9f9f9;
    width: 100%;
    height: 50px;
    max-width: 260px;
    padding: 8px 14px;
    padding-left: 44px;
    padding-right: 44px;
    flex-basis: 30%;
    border-radius: 4px;

    @media (min-width: 600px) {
      border-radius: 0 4px 4px 0;
    }
  }
`;
