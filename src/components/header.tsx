import React from 'react';
import { FaCaretDown, FaUserAlt } from 'react-icons/fa';
import { BtnCliente, ButtonArea, Container } from '../styles/components/header';
import MainLogo from "./main-logo";

const Header: React.FC = () => (
    <Container>
      <MainLogo />
      <ButtonArea>
        <ul>
          <li>Inicio</li>
          <li>Serviços <FaCaretDown/></li>
          <li>Contato <FaCaretDown/></li>
        </ul>

        <BtnCliente>
          <FaUserAlt/> Área do Cliente
        </BtnCliente>
      </ButtonArea>
    </Container>
  )

export default Header;
