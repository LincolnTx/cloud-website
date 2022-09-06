import { Container, AvailableGamesContainer, GameOptions, Choices, ServiceLink, Footer} from "../styles/components/services-list";
import { Divider } from "../styles/global";
import MainLogo from "./main-logo";

export default function ServicesList() {
  return (
    <Container>
      <AvailableGamesContainer>
        <GameOptions>
          <h2>League of Legends</h2>
          <Choices>
            <ServiceLink href="/">Elo boost</ServiceLink>
            <ServiceLink href="/">Duo boost</ServiceLink>
            <ServiceLink href="/">Md10</ServiceLink>
            <ServiceLink href="/">Coach</ServiceLink>
            <ServiceLink href="/">Vitórias</ServiceLink>
            <ServiceLink href="/">Maestria</ServiceLink>
          </Choices>
        </GameOptions>

        <GameOptions>
          <h2>Valorant</h2>
          <Choices>
            <ServiceLink href="/">Elo boost valorant</ServiceLink>
            <ServiceLink href="/">Duo boost valorant</ServiceLink>
            <ServiceLink href="/">Md5 valorant</ServiceLink>
            <ServiceLink href="/">Coach valorant</ServiceLink>
            <ServiceLink href="/">Vitórias valorant</ServiceLink>
          </Choices>
        </GameOptions>

        <GameOptions>
          <h2>Teamfight Tatics</h2>
          <Choices>
            <ServiceLink href="/">TFT - elo boost</ServiceLink>
            <ServiceLink href="/">TFT - md10</ServiceLink>
            <ServiceLink href="/">TFT - vitórias</ServiceLink>
            <ServiceLink href="/">TFT - Coach</ServiceLink>
          </Choices>
        </GameOptions>

        <GameOptions>
          <h2>Wild Rift</h2>
          <Choices>
            <ServiceLink href="/">Elo boost wild rift</ServiceLink>
            <ServiceLink href="/">Duo boost wild rift</ServiceLink>
            <ServiceLink href="/">Md10 wild rift</ServiceLink>
            <ServiceLink href="/">Vitórias wild rift</ServiceLink>
            <ServiceLink href="/">Coach wild rift</ServiceLink>
          </Choices>
        </GameOptions>
      </AvailableGamesContainer>

      <Divider height="1px" width="60%" />

      <Footer>
        <div className="cloud-link">
          <MainLogo width="50%"/>
          <span>
            League of Legends é uma marca registrada da Riot Games, Inc. Nós não somos de nenhuma
            forma afiliados, associados ou endossado pela Riot Games, Inc. Todos os direitos autoriais,
            marcas imagens e marcas de serviço pertecem a seus respectivos proprietários.
          </span>
        </div>
        <div className="payment-info" >
          <span>Formas de pagamento</span>
          <div>Adicionar método de pagamento aceitos</div>
        </div>
      </Footer>
    </Container>
  )
}
