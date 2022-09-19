import React, { useState, useCallback } from 'react';
import { FaCaretDown, FaUserAlt } from 'react-icons/fa';
import { BtnCliente, ButtonArea, Container } from '../styles/components/header';
import LoginModal from './login-modal';
import MainLogo from "./main-logo";
import ModalContainer from './modal-container';

const Header: React.FC = () => {
  const [modalState, setModalState] = useState(false);

  // function modalToggle() {
  //   setModalState(!modalState);
  // }

  const toggleModal = useCallback(() => {
    setModalState(!modalState);
  }, [setModalState, modalState]);


  return (
    <Container>
      <MainLogo />
      <ButtonArea>
        <ul>
          <li>Inicio</li>
          <li>Serviços <FaCaretDown/></li>
          <li>Contato <FaCaretDown/></li>
        </ul>

        <BtnCliente onClick={() => toggleModal()} aria-hidden="true">
          <FaUserAlt/> Área do Cliente
        </BtnCliente>

        <ModalContainer activeModal={modalState} toggleModal={toggleModal} aria-hidden="true">
          <LoginModal/>
        </ModalContainer>
      </ButtonArea>
    </Container>
  );
}

export default Header;
