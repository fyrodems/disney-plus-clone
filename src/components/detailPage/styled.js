import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .8;
    }
`;

export const Title = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
`;

export const Play = styled.button`
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
`;

export const Trailer = styled(Play)`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

export const Add = styled.button`
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
`;

export const GroupWatch = styled(Add)``;

export const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

export const Description = styled.p`
  display: inline-block;
  line-height: 1.4;
  font-size: 20px;
  //  padding:
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 750px;
`;

export const LoaderContainer = styled(Container)`
  display: grid;
  place-items: center;
`;
