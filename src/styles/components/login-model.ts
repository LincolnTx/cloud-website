import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: center;
  margin: 32px;
  flex-direction: column;
  width: 580px;
  height: 400px;
  color: ${props => props.theme.colors.background};
  border-radius: 8px;
`;
export const HeaderContainer = styled.header`
  display: flex;
  height: 35%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  background: linear-gradient(to right, ${props => props.theme.colors.mainGradientStart}, ${props => props.theme.colors.mainGradientEnd});
  border-bottom:none;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 4px;
`;

export const VerticalDivider = styled.hr`
  height: 80%;
  width: 1px;
  background: ${props => props.theme.colors.background};
  filter: brightness(100%);
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 12px;
    text-align: justify;
  }
`;

export const Content = styled.main`
  display: flex;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-start;
  background: ${props => props.theme.colors.menu};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 65%;
  width: 100%;
`;

export const LabelArea = styled.div`
  width: 70%;

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    justify-content: center;

    label {
      font-size: 13px;
      margin-bottom: 12px;
    }
  }
  a {
    font-size: 13px;
    margin-right: 20px;
    text-decoration: none;
    color: #FFF;

    :hover {
      filter: brightness(80%);
    }
  }
`;

export const Centralizer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    margin-left: 20%;
    width: 50%;
    margin-top: 8px;
    align-self: center;
  }
`;

export const ButtonArea = styled.div`
  height: 85%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 18px;

    input {
      margin-right: 8px;
      font-size: 110%;
    }
    label {
      font-size: 14px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  width: 100%;
  position: relative;
  background: #FFF;
  border-radius: 24px;
  margin-bottom: 12px;

  svg {
    color: ${props => props.theme.colors.text};
    margin: 12px;
  }

  input {
    padding: 8px;
    margin: 8px;
    height: 70%;
    width: 100%;
    border: none;
    border-left: 1px solid;

    :focus {
      outline-width: 0;
    }
  }
`;


