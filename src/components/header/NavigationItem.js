import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;

  &:hover span:after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 20px;
  margin-right: 5px;
`;

const Text = styled.span`
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;

    &:after {
      content '';
      height: 2px;
      background: #fff;
      position: absolute;
      left: 0;
      right: 0;
      bottom -6px;
      opacity: 0;
      transform-origin: left center;
      transition all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
      
    }
`;

const NavigationItem = ({ href, src, text }) => {
  return (
    <Link href={href}>
      <Image src={src} alt={text} />
      {window.innerWidth > 800 ? <Text>{text}</Text> : ""}
    </Link>
  );
};

export default NavigationItem;
