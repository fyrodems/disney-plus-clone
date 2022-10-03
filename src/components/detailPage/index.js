import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
        </Background>
        <Title>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
        </Title>
        <Buttons>
            <Play>
                <img src='/images/play-icon-black.png' alt='play' />
                <span>play</span>
            </Play>
            <Trailer>
                <img src='/images/play-icon-white.png' alt='trailer' />
                <span>trailer</span>
            </Trailer>
            <Add>
                <span>+</span>
            </Add>
            <GroupWatch>
            <img src='/images/group-icon.png' alt='trailer' />
            </GroupWatch>
        </Buttons>

        <Subtitle>
            2018 * 7m * Family, Fantasy, Kids, Animation
        </Subtitle>

        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, mi vel mollis consequat, lacus turpis convallis risus, ac maximus metus massa in nunc. Suspendisse vitae malesuada lectus, sed dignissim nunc. Phasellus vel magna at diam rhoncus maximus eget eu arcu. 
        </Description>


    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
}
`

const Background = styled.div`
    position: fixed;
    top: 0;
    letf: 0;
    right: 0;
    bottom 0;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .8;
    }
`

const Title = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 22px;
    align-items: center;

`

const Play = styled.button`
    padding: 0px 24px;
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const Trailer = styled(Play)`
    background: rgba(0, 0, 0, 0.3);
    border: 2px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const Add = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid rgb(249, 249, 249);
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

     span {
        font-size: 30px;
        color: rgb(249, 249, 249);

     }
`

const GroupWatch = styled(Add)``

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.p`
    display: inline-block;
    line-height: 1.4;
    font-size: 20px;
    //  padding:
    margin-top: 16px;
    color: rgb(249, 249, 249);
`