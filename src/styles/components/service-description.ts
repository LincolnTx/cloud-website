import styled from "styled-components";

interface IContainerStyle {
  textColor: string;
  gradientStart: string;
  gradientEnd?: string;
  titleColor: string;
}
export const Container = styled.div<IContainerStyle> `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 32%;
  height: 90%;
  max-height: 400px;
  margin: 0;
  padding: 18px;
  text-align: center;
  color: ${props => props.textColor};
  background: linear-gradient(to right, ${props => props.gradientStart}, ${props => props.gradientEnd});
  border-radius: 8px;

  h1 {
    color: ${props => props.titleColor };
  }

`;

export const ContractButton = styled.button`
border: none;
color: ${props => props.theme.colors.background};
font: 24px 400;
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
