import Head from 'next/head';
import ServiceDescription from '../components/service-description';
import { Container, Cover, Title, InfoContainer } from '../styles/pages/Index';

export default function Home() {
  return (
    <>
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
        <Container>
          <Head>
            <title>Elojobs Cloud</title>
          </Head>

            <Cover >
              <Title>
                <h1>Elojob</h1>
                <p>Cloud</p>
              </Title>
                <p>Seu elo nas núvens!</p>
            </Cover>
        </Container>
    </>
  )
}
