import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const Upside = styled.div`
  width: 100%;
  height: 60%;
  color: ${props => props.theme.colors.background};
  background:
    linear-gradient(to bottom, rgba(2, 0, 51, 0.4), rgba(29, 31, 143, 0.6)),
    url('./cover.svg');

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 400;
    font-size: 32px;
    color: ${props => props.theme.colors.opacity};
    font-weight: 250;
  }

  padding-bottom: 56px;
`;

export const Downside = styled.div`
  width: 100%;
  height: 40%;
`;

export const Container = styled.div`
  height: 0px;
  /* this is to align cards in center */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0px;
`;

export const InfoContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  height: 400px;
  width: 50%;
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: 0 18px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 12px 0;
  padding: 0;

  h1 {
    font-size: 55px;
    margin-right: 4px;
  }

  span {
    font-size: 59px;
    line-height: 32px;
    font-weight: 400;
  }
`;

