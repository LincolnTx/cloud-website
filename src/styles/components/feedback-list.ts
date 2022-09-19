import styled from "styled-components";

interface StyledSpan {
  textColor: string;
}

export const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

export const UpContainer = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 4px;
  color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(to right, rgba(2, 0, 51, 0.85), rgba(29, 31, 143, 0.9));

  .champion-cover {
    padding: 0 8px;
    width: 25%;
    height: 100%;
    background: url('./irelia-cover.svg');
    mix-blend-mode: normal;
    background-repeat: no-repeat;
  }
`;

export const FeedbacksContainer = styled.div`
  padding: 36px 0 12px 0;
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: url('./feedback-cover.png');
  mix-blend-mode: normal;
  background-repeat: no-repeat;

  h1 {
    font: 400 24px Roboto, 'sans-serif';
    margin-bottom: 8px;
    margin-left: 24px;
  }
  span {
    font: 400 18px Roboto, sans-serif;
    text-align: justify;
  }

  button {
    width: 20%;
    align-self: center;
  }
`;

// TODO: Ainda não tem no layout
export const Feedbacks = styled.div``;

export const DownContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${props => props.theme.colors.menu};
`;

export const InfoContainer = styled.div`
  height: 80%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${props => props.theme.colors.menu};

  .title {
      font: 500 24px Roboto, 'sans-serif';
      color: ${props => props.theme.colors.titleOne};
    }

    a {
      font: 700 32px Roboto, 'sans-serif';
      text-transform: uppercase;
      margin-right: 20px;
      text-decoration: none;
      background: linear-gradient(90deg, #414ACC 0%, #2F80ED 50%, #2D9EE0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      :hover {
        filter: brightness(80%);
      }

    }

    .information {
      font: 400 16px Roboto, 'sans-serif';
      text-align: justify;
    }
`;

export const StyledText = styled.span<StyledSpan>`
  color: ${props => props.textColor};
`;
