import React, { ReactNode } from "react";
import { Container, ContractButton, TitleContainer } from "../styles/components/service-description";
import theme from "../styles/theme";

export interface Props {
  darkTheme: boolean;
  title: string;
  children?: ReactNode;
}
const ServiceDescription: React.FC<Props> = ({title, children, darkTheme}: Props) => {
  return (
    <Container
      gradientStart={darkTheme? theme.colors.mainGradientStart : theme.colors.background}
      gradientEnd={darkTheme && theme.colors.mainGradientEnd}
      textColor={darkTheme ? theme.colors.background : theme.colors.text}
      titleGradient={darkTheme ? theme.colors.background : theme.colors.mainGradientStart}
      titleGradientEnd={darkTheme ? theme.colors.background : theme.colors.mainGradientEnd}
    >
      <TitleContainer>
        <hr />
        <h1>{title}</h1>
        <hr />
      </TitleContainer>

      <p>{children}</p>
      <ContractButton>Contratar</ContractButton>
    </Container>
  );
};

export default ServiceDescription;
