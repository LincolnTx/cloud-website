import styled from "styled-components";

interface IContainerStyle {
  textColor: string;
  gradientStart: string;
  gradientEnd?: string;
  titleGradient: string;
  titleGradientEnd: string;
}
export const Container = styled.div<IContainerStyle> `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 32%;
  height: 100%;
  max-height: 400px;
  margin-top: 5%;
  padding: 18px;
  text-align: center;
  color: ${props => props.textColor};
  background: linear-gradient(to right, ${props => props.gradientStart}, ${props => props.gradientEnd});
  //border: 1px solid #000;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);
  border-radius: 8px;

  h1 {
    font: 500 36px 'Roboto', sans-serif;
    background: linear-gradient(90deg, ${props => props.titleGradient} 0%, ${props => props.titleGradientEnd} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`;

export const ContractButton = styled.button`
border: none;
color: ${props => props.theme.colors.background};
font: 400 18px 'Roboto', sans-serif;
border-radius: 8px;
background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
height: 40px;
width: 80%;
transition: filter 0.2s;

cursor: pointer;
:hover {
  filter: brightness(120%);
}
`;

export const TitleContainer = styled.div``;
