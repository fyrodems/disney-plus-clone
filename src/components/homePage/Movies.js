import React from 'react';
import styled from 'styled-components';

const Movies = () => {
  return (
    <Container>
        <h4>Recomended for You</h4>
        <Content>
            <SingleReco>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
            </SingleReco>

            <SingleReco>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
            </SingleReco>

            <SingleReco>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
            </SingleReco>

            <SingleReco>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" alt=""/>
            </SingleReco>

        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    padding: 0px
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const SingleReco = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, .1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img {
        width: 100%; 
        height: 100%;
        object-fit: cover;
    }

    :hover {
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, .8);
    }
`