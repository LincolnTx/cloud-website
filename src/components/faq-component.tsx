import Image from "next/image";
import { FaAngleDown } from 'react-icons/fa';
import { Container, DownContainer, FaqContainer, Main, Ornaments, UpContainer, AboutDescription } from "../styles/components/faq-component";
import Doubts from '../assets/duvidas.svg';

export default function Faq() {

  return (
    <Main>
      <UpContainer>
        <div className="champion-cover" />
        <AboutDescription>
          <h1>Sobre nós</h1>
          <span>Inicialmente, fundada com o intuito de melhorar o servidor brasileiro,
            ajudando aqueles que desejam melhorar seu próprio desempenho dentro do jogo,
            a CLOUD é uma comunidade que possui os melhores boosters em relação à capacidade
            de compartilhar o conhecimento para aqueles que buscam elevar o elo de suas contas,
            isso tudo com um custo x beneficio ideal para seu bolso.
          </span>
        </AboutDescription>
        <div className="bubbles-cover" />

      </UpContainer>

      <DownContainer>
        <Container>
          <Ornaments>
            <h1>Dúvidas Frequentes</h1>

            <span>Tire suas dúvidas com as perguntas mais
                  frequentes de nossos clientes
            </span>

            <Image src={Doubts} alt="Mascote da cloud para dúvidas"/>
          </Ornaments>

          <FaqContainer>
            <div className="title">
              O Elojob é confiável?
              <FaAngleDown />
            </div>
            <div className="description">
              Sem sombra de dúvida!, sendo relativamente nova no mercado(1 ano),
              nossa equipe já conta com mais de 300 serviços realizados,
              sempre pensando na segurança e satisfação de nossos clientes!
            </div>

            <div className="title">
              Por que contratar o elojob cloud?
              <FaAngleDown />
            </div>

            <div className="title">
              Como sei que não irão roubar minha conta?
              <FaAngleDown />
            </div>

            <div className="title">
              Quando meu serviço irá iniciar?
              <FaAngleDown />
            </div>

            <div className="title">
              há risco de suspensão na conta?
              <FaAngleDown />
            </div>

            <div className="title">
              poderei acompanhar o pedido?
              <FaAngleDown />
            </div>
          </FaqContainer>
        </Container>
      </DownContainer>
    </Main>
  );
}
