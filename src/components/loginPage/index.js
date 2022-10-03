import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      
        <CTA>
          <Logo1 src="/images/cta-logo-one.svg"></Logo1>
          <SignUp>get all there</SignUp>

          <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </Description>

          <Logo2 src="/images/cta-logo-two.png" />
        </CTA>
      
    </Container>

  )
}

export default Login;

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow: hidden;
display: grid;
place-items: center;

&:before {
  background: url("/images/login-background.jpg") center center / cover
    no-repeat fixed;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .7;
  z-index: -1;
`

// const Content = styled.div``

const CTA = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 80px 40px; 
  display: flex;
  flex-direction: column;

`

const Logo1 = styled.img``

const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background: #0063e5;
  font-weight: 600;
  display: inline-block;
  margin-top: 8px;
  maring-bottom: 12px;
  padding: 20px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition all 250ms;
  letter-spacing: 1.5px;

  &:hover{
    background: #0483ee;
  }
`

const Description = styled.p`
  display: inline-block;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  line-heigth: 1.5;
`

const Logo2 = styled.img`
`