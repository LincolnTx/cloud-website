import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.mainGradientStart};
  color: ${props => props.theme.colors.background};
  font: 400 15px Roboto, 'sans-serif';
`;


export const AvailableGamesContainer = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  margin: 16px 0;
`;
export const GameOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 15%;

  h2 {
    font: 500 22px Roboto, 'sans-serif';
    text-transform: uppercase;
    padding: 8px 12px;
    text-align: center;
    height: 20%;
  }

`;

export const Choices = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ServiceLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  font: 400 15px Roboto, 'sans-serif';
  color: ${props => props.theme.colors.text};
  width: 100%;
  height: 10%;
  margin: 0 0 12px 0;
  background-color: ${props => props.theme.colors.background};
  border-radius: 12px;

  :hover {
    box-shadow: 6px 0 6px 6px rgb(255,255,255, 0.16), 0 6px 6px rgb(255,255,255, 0.45);
    background: linear-gradient(90deg, ${props => props.theme.colors.background} 0%, ${props => props.theme.colors.background} 100%);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 30%;

  .cloud-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 50%;
    font: 400 14px Roboto, 'sans-serif';
  }

  .payment-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    justify-content: space-between;
    align-items: center;
  }
`;
