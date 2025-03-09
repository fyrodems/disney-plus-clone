import { Image, Link as StyledLink, Text } from "./styled";

import { Link } from "react-router-dom";

const NavigationItem = ({ href, src, text }) => {
  return (
    <Link to={href}>
      <StyledLink>
        <Image src={src} alt={text} />
        {window.innerWidth > 800 ? <Text>{text}</Text> : ""}
      </StyledLink>
    </Link>
  );
};

export default NavigationItem;
