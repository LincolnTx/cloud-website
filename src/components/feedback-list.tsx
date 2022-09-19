import Link from "next/link";
import { DownContainer, FeedbacksContainer, Main, UpContainer, Feedbacks, InfoContainer, StyledText } from "../styles/components/feedback-list";
import theme from "../styles/theme";


export default function FeedbackList() {
  return(
    <Main>
      <UpContainer>
        <div className="champion-cover"/>
        <FeedbacksContainer>
          <h1>Veja o que nossos clientes tem a dizer</h1>
          <Feedbacks />
          <button className="button" type="button"> + ver todas as avaliações</button>
        </FeedbacksContainer>
      </UpContainer>

      <DownContainer>
        <InfoContainer>
          <span className="title">Ainda possuí alguma dúvida?</span>
          <Link className="faq-link" href="/">Faq&lsquo;s</Link>
          <span className="information">Entre em contato conosco acessando nossa página de
            <StyledText textColor={theme.colors.faq}>&nbsp;FAQ&lsquo;s.</StyledText>
            Além de termos atendimento On-line e em tempo real, você também pode entrar em contato conosco por <b>e-mail</b>,
            <StyledText textColor={theme.colors.whatsapp}>
              &nbsp;WhatsApp
            </StyledText> ou
            <StyledText textColor={theme.colors.discord}>
              &nbsp;Discord
            </StyledText> para dúvidas mais específicas.
          </span>
        </InfoContainer>
      </DownContainer>
    </Main>
  );
}
