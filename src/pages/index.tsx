import Head from 'next/head'
import cover from '../assets/cover.svg';
import { Container, Cover, Title, InfoContainer } from '../styles/pages/Index';

export default function Home() {
  return (
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

        <InfoContainer>
          <div>EloJob</div>
          <div>Duo boost</div>
          <div>Coach</div>
        </InfoContainer>

    </Container>
  )
}
