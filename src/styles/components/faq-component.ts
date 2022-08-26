import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

export const UpContainer = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 12px;
  color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, rgba(2, 0, 51, 0.85), rgba(29, 31, 143, 0.9));

  .champion-cover {
    padding: 0 8px;
    width: 30%;
    height: 100%;
    background: url('./faq-cover.svg');
    mix-blend-mode: normal;
    background-repeat: no-repeat;
  }

  .bubbles-cover {
    padding: 0 12px;
    width: 20%;
    height: 100%;
    background: url('./bubbles.png');
    mix-blend-mode: normal;
    background-repeat: no-repeat;
  }

`;

export const AboutDescription = styled.div`
  margin-top: 24px;
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  h1 {
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  span {
    font: 400 18px Roboto, sans-serif;
    text-align: justify;
  }
`;

export const DownContainer = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Container = styled.div`
  width: 50%;
  height: 80%;

  display: flex;
  //mudar para centro se ficar pequeno
  justify-content: space-around;
  align-items: center;
`;

export const Ornaments = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    color: ${props => props.theme.colors.titleOne};
  }

  span {
    font: 400 16px Roboto, 'sans-serif';
  }
`;

export const FaqContainer = styled.div`
  width: 60%;
  height: 90%;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  .title {
    height: 10%;
    width: 100%;
    color: ${props => props.theme.colors.background};

    background: linear-gradient(to right, ${props => props.theme.colors.mainGradientStart}, ${props => props.theme.colors.mainGradientEnd});
    border-radius: 8px;
    border-bottom-right-radius: 24px;

    display: flex;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
    font: 400 16px Roboto, 'sans-serif';
    text-transform: uppercase;

    svg {
      font-size: 24px;
    }
  }

  .description {
      width: 100%;
      height: 25%;
      background-color: ${props => props.theme.colors.faqBackground};
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 32px;
      text-align: justify;
      font: 400 16px Roboto, 'sans-serif';
    }
`;
