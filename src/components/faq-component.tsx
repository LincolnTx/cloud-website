import Image from "next/image";
import React from "react";
import { Container, DownContainer, FaqContainer, Main, Ornaments, UpContainer, AboutDescription, TriggerProps, StyledHeader, StyledTrigger, StyledArrow, StyledContent, StyledContentText, ContentProps, AccordionItem } from "../styles/components/faq-component";
import Doubts from '../assets/duvidas.svg';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AccordionTrigger = React.forwardRef<any, TriggerProps>(({ children, ...props }, ref) => (

  <StyledHeader>
    <StyledTrigger {...props} ref={ref}>
      {children}
      <StyledArrow aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AccordionContent = React.forwardRef<HTMLDivElement, ContentProps>(({ children, ...props }: any, ref) => (
  <StyledContent {...props} ref={ref}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

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
            {/* TODO: Corrigir a imagem atrapalhando o modal de login */}
            <Image src={Doubts} alt="Mascote da cloud para dúvidas" className="doubts"/>
          </Ornaments>

          <FaqContainer type="single" collapsible>
            <AccordionItem value="confiavel">
              <AccordionTrigger className="title">O Elojob é confiável</AccordionTrigger>

              <AccordionContent>
                Sem sombra de dúvida!, sendo relativamente nova no mercado(1 ano),
                nossa equipe já conta com mais de 300 serviços realizados,
                sempre pensando na segurança e satisfação de nossos clientes!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contratar">
              <AccordionTrigger className="title">Por que contratar na Elo Cloud?</AccordionTrigger>

              <AccordionContent>
                Tendo uma equipe estruturada de jogadores de alto nível,
                a CLOUD tem apenas um lema: &quot;O cliente em primeiro lugar! &quot;,
                prezando sempre por deixar um gostinho de quero mais,
                desde o atendimento até o termino do serviço,
                você poderá personalizar o serviço contratado do seu jeito
                e vamos concluir ele com segurança e sem levantar suspeitas.
                A CLOUD é uma comunidade que possui os melhores boosters em
                relação à capacidade de compartilhar o conhecimento para aqueles
                que buscam elevar o elo de suas contas, isso tudo com um custo x beneficio ideal para seu bolso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="conta segura">
              <AccordionTrigger className="title">Como sei que não irão roubar minha conta?</AccordionTrigger>

              <AccordionContent>
                Para realizar qualquer modificação em sua conta, é necessário
                acesso ao seu email pessoal. Nós NUNCA iremos solicitar essas informações para você.
                Não iremos conversar com ninguém e nem realizar nenhum ação em sua conta sem a sua expressa
                autorização. Que você verifique o seu e-mail antes do inicio de qualquer serviço que envolva sua conta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inicio servico">
              <AccordionTrigger className="title">Quando meu Serviço irá iniciar?</AccordionTrigger>

              <AccordionContent>
                Ao realizar a compra do serviço, daremos inicio em poucos minutos,
                você será notificado e poderá acompanhar todo o progresso
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="risco suspencao">
              <AccordionTrigger className="title">Há risco de suspensão na conta?</AccordionTrigger>

              <AccordionContent>
                Desde o início do serviço tomamos medidas de segurança adicionais,
                para que o risco de suspensão permanente ou qualquer restrição seja ZERO!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="acompanhamento">
              <AccordionTrigger className="title">Poderei acompanhar meu pedido?</AccordionTrigger>

              <AccordionContent>
                Através de nossa plataforma você poderá acompanhar o progresso de seu pedido,
                além de poder entrar em contato com nosso booster para retirar qualquer dúvida.
              </AccordionContent>
            </AccordionItem>
          </FaqContainer>
        </Container>
      </DownContainer>
    </Main>
  );
}
