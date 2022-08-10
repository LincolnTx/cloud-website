import React from 'react';
import { FaCaretDown, FaUserAlt } from 'react-icons/fa';
import Image from 'next/image';
import { BtnCliente, ButtonArea, Container, Logo } from '../styles/components/header';
import logo from '../assets/logo.svg';
import textLogo from '../assets/text-logo.svg';

const Header: React.FC = () => (
    <Container>
      <Logo>
        <Image src={logo} alt="Cloudinho"/>
        <Image src={textLogo} alt="logo em texto da cloud"/>
      </Logo>

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
