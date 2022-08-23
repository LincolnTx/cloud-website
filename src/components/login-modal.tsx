import { FaUser, FaLock } from 'react-icons/fa';
import Link from "next/link";
import {
  Container,
  Content,
  HeaderContainer,
  InputContainer,
  TitleContainer,
  VerticalDivider,
  ButtonArea,
  LabelArea,
  Centralizer
} from "../styles/components/login-modal";
import MainLogo from "./main-logo";

export default function LoginModal() {
  return (
    <Container>
      <HeaderContainer>
        <MainLogo />
        <VerticalDivider />
        <TitleContainer>
          <h2>Seja bem vindo!</h2>
          <p>Por favor, insira seu e-mail e senha para acessar sua conta da CLOUD.
            Caso ainda não tenha registrado, você pode realizar seu cadastro abaixo.
          </p>
        </TitleContainer>
      </HeaderContainer>

      <Content>
        <LabelArea>
          <fieldset>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="name">Nome de usuário ou e-mail</label>
            <InputContainer>
              <FaUser />
              <input type="email" id="email"/>
            </InputContainer>
          </fieldset>

          <fieldset>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="senha">Senha</label>
            <InputContainer>
              <FaLock />
              <input type="password" id="senha"/>
            </InputContainer>
          </fieldset>

          <div>
            <Link href="/">Esqueci minha senha</Link>
          </div>

          <Centralizer>
            <button className="button" type="button">Criar nova conta</button>
          </Centralizer>
        </LabelArea>

        <ButtonArea>
          <div>
            <input type="checkbox" id="lembrar"/>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="lembrar">Lembrar</label>
          </div>
          <button className="button" type="button">Entrar</button>
        </ButtonArea>
      </Content>

    </Container>
  );
}

