import styled, { keyframes } from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import * as Accordion from '@radix-ui/react-accordion';


export type TriggerProps = Accordion.AccordionTriggerProps;
export type ContentProps = Accordion.AccordionContentProps;

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-collapsible-content-height)" }
});

const close = keyframes({
  from: { height: "var(--radix-collapsible-content-height)" },
  to: { height: 0 }
});

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
  .doubts {
    z-index: -10000;
  }
`;

export const FaqContainer = styled(Accordion.Root)`
  width: 60%;
  height: 90%;

  display: flex;
  flex-direction: column;

  .title {
    height: 1005;
    color: ${props => props.theme.colors.background};
    cursor: pointer;

    background: linear-gradient(to right, ${props => props.theme.colors.mainGradientStart}, ${props => props.theme.colors.mainGradientEnd});
    border-bottom-right-radius: 12px;

    display: flex;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
    font: 400 16px Roboto, 'sans-serif';
    text-transform: uppercase;
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  margin: 8px 0;
`;
export const StyledHeader = styled(Accordion.Header)`
  all: unset;
  display: flex;
  height: 38px;
`;

export const StyledTrigger = styled(Accordion.Trigger)`
  all: unset;
  font-family: inherit;
  background-color: transparent;
  padding: 0 20px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1px;
  color: white;
  box-shadow: 0 1px 0 1px;

  &:hover{
    background: linear-gradient(to left, ${props => props.theme.colors.mainGradientStart}, ${props => props.theme.colors.mainGradientEnd});
  }
`;

export const StyledContent = styled(Accordion.Content)`
  overflow: hidden;
  font-size: 15px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  text-align: justify;
  font: 400 15px Roboto, 'sans-serif';
  background-color: ${props => props.theme.colors.faqBackground};

  &[data-state="open"] {
    animation: ${open} 200ms cubic-bezier(0.87, 0, 13, 1);
  };

  &[data-state="closed"] {
    animation: ${close}200ms cubic-bezier(0.87, 0, 13, 1);
  }
`;

export const StyledContentText = styled.div`
  padding: 15px 20px;
`;

export const StyledArrow = styled(FaAngleDown)`
  font-size: 24px;
  transition: transform 200ms cubic-bezier(0.87, 0, 0.13, 1);

  [data-state="open"] & {
    transform: rotate(180deg);
  }
`;





