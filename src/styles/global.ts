import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.text };
    font: 400 14px "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font: 400 14px "Roboto", sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font: 400 18px "Roboto", sans-serif;
  }

  form input {
    width: 100%;
    height: 30px;
    margin-bottom: 12px;
    color: #9B9898;
    border: 1px solid #dcdce6;
    border-radius: 24px;
    padding: 0 16px;
    box-sizing: border-box;
  }
  ::placeholder{
    color: #9B9898;
  }

  .button {
    width: 100%;
    height: 40px;
    background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    font: 700 14px "Roboto", sans-serif;
    border: 0;
    border-radius: 8px;
    transition: filter 0.2s;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    line-height: 40px;
    color: #FFF;

    :hover {
      filter: brightness(120%);
    }
  }
`;

export type DividerProps = {
  height: string;
  width: string;
  background?: string;
}

export const Divider = styled.hr<DividerProps>`
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.background};
`;
