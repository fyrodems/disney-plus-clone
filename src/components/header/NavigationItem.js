import { Image, Link, Text } from "./styled";

const NavigationItem = ({ href, src, text }) => {
  return (
    <Link href={href}>
      <Image src={src} alt={text} />
      {window.innerWidth > 800 ? <Text>{text}</Text> : ""}
    </Link>
  );
};

export default NavigationItem;
