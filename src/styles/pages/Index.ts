import styled from "styled-components";

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${props => props.theme.colors.background};

`;

export const Cover = styled.div `
  height: 50%;
  width: 100%;
  align-self: flex-start;
  background-image:
    linear-gradient(to bottom, rgba(2, 0, 51, 0.6), rgba(2, 0, 51, 0.4)),
    url('./cover.svg');


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 32px;
  }
    /* img {
    height: 20px;
  } */
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

p {
  font-size: 59px;
  line-height: 32px;
  font-weight: 400;
}
`;

export const InfoContainer = styled.div `
  color: '#000';

`;
