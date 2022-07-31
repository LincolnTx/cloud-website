import Head from 'next/head'
import logo from '../assets/rocket.svg';
import Image from 'next/image'
import { Container } from '../styles/pages/Index';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Cloud Elojobs</title>
      </Head>

      <main>
        <Image  src={logo} alt="" />
        <h1>Cloud Elojob</h1>
        <p>Plataforma para serviços de elojob nos mais diversos jogos.</p>
      </main>
    </Container>
  )
}
