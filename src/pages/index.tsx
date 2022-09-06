import Head from 'next/head';
import Faq from '../components/faq-component';
import ServiceDescription from '../components/service-description';
import ServicesList from '../components/services-list';
import { Container, Title, InfoContainer, Main, Upside, Downside } from '../styles/pages/Index';

export default function Home() {
  return (
  <Main>
    <Upside>
      <Head>
        <title>Elojobs Cloud</title>
      </Head>
      <Title>
        <h1>Elojob</h1>
        <span>Cloud</span>
      </Title>
      <span>Seu elo nas núvens!</span>
    </Upside>

    <Container>
      <InfoContainer>
        <ServiceDescription title='Elo Job' darkTheme >
          Nosso serviço mais rápido. Um de nossos jogadores irá jogar na sua conta
          até a divisão requirida. Você também pode customizar o serviço, como lane,
          campeões, restrição de horário etc.
        </ServiceDescription>

         <ServiceDescription title='Duo boost' darkTheme={false} >
           Para mais segurança, jogue junto com um jogador HIGH ELO e veja de perto como
           funciona a mente de um jogador de nível alto para vencer o jogo!
         </ServiceDescription>

         <ServiceDescription title='Coach' darkTheme >
           Melhora sua gameplay com ensinamentos de um professor HIGH ELO te explicando na
           prática, analisando seus replays e muito mais!
         </ServiceDescription>
      </InfoContainer>
    </Container>

    <Downside />

    <Faq />

    <ServicesList />
  </Main>
  )
}
