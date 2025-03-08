import { useNavigate } from "react-router-dom";

// AUTH
import { auth, provider } from "../../firebase";

// REDUX
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../features/user/userSlice";

// STYLES
import { Container, CTA, Description, Form, Title } from "./styled";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <Container>
      <CTA>
        <img alt="logo" src="./images/logo.svg"></img>
        <Title>+ więcej niż możesz sobie wymarzyć</Title>

        <Description>
          Wpisz swój adres e-mail, aby utworzyć lub ponownie wykupić
          subskrybcję.
          <Form>
            <input placeholder="Twój e-mail"></input>
            <span onClick={signIn}>kontynuuj</span>
          </Form>
          12 miesięcy w cenie 10 - kup korzystniejszą roczną subskrybcję
          Disney+, zamiast comiesięcznej.
        </Description>
      </CTA>
    </Container>
  );
};

export default Login;
