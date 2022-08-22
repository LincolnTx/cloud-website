import React, { ReactNode } from 'react';
import { Container, ContractButton, HorizontalDivider } from '../styles/components/service-description';
import theme from '../styles/theme';

export interface Props {
  darkTheme: boolean;
  title: string;
  children: ReactNode;
}
const ServiceDescription: React.FC<Props> = ({title, children, darkTheme}: Props) => (
    <Container
      gradientStart={darkTheme? theme.colors.mainGradientStart : theme.colors.background}
      gradientEnd={darkTheme && theme.colors.mainGradientEnd}
      textColor={darkTheme ? theme.colors.background : theme.colors.text}
      titleGradient={darkTheme ? theme.colors.background : theme.colors.mainGradientStart}
      titleGradientEnd={darkTheme ? theme.colors.background : theme.colors.mainGradientEnd}
    >
      <div

      >
        <HorizontalDivider
          gradientStart={darkTheme? theme.colors.primary : theme.colors.mainGradientStart}
          gradientEnd={darkTheme ? theme.colors.secondary : theme.colors.mainGradientEnd}
        />
        <h1>{title}</h1>
        <HorizontalDivider
          gradientStart={darkTheme? theme.colors.primary : theme.colors.mainGradientStart}
          gradientEnd={darkTheme ? theme.colors.secondary : theme.colors.mainGradientEnd}
        />
      </div>

      <p>{children}</p>
      <ContractButton>Contratar</ContractButton>
    </Container>
  );

export default ServiceDescription;
