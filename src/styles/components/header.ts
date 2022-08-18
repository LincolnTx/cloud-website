import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 80vw;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;


  position: fixed;
  top: 0;
  left: 0;
  right: 0;

`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  ul {
    list-style: none;
    display: flex;
    width: 80%;
    justify-content: space-around;
    color: ${props => props.theme.colors.background};
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 24px;
    border-radius: 24px;
    max-width: 100%;
  }
  li:hover {
    background: ${props => props.theme.colors.menuSelected};
  }

`;

export const BtnCliente = styled.button `
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-left: 12px;
  background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border: none;
  border-radius: 24px;
  width: 160px;
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;

  :hover {
    filter: brightness(120%);
  }
`;
