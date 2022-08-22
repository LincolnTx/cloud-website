import { ReactNode } from "react";
import styled from "styled-components";


interface IModalStyle {
  visible: boolean;
}
const Modal = styled.div<IModalStyle>`
  position: fixed;
  z-index: auto;
  display: ${props => props.visible ? 'flex' : 'none'};
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  top: 0;
  left:0px;
  justify-content: center;
  align-items: center;
  /* visibility: hidden;
  opacity: 0; */
  opacity: ${props => props.visible ? '1' : '0'};
  transition: display 0.5s, opacity 0.5s;

  /* &.active {
    visibility: visible;
    opacity: 1;
  } */

  // remover saqui se for usar o ModalContainer
  .close-button {
    position: absolute;
    top: 50px;
    right: 50px;
    background-image: url('close.svg');
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .close-button {
    position: absolute;
    top: 50px;
    right: 50px;
    background-image: url('close.svg');
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export interface ModalProps {
  children: ReactNode;
  activeModal: boolean;
  toggleModal(): void;

}
export default function ModalContainer({ children, activeModal, toggleModal }: ModalProps) {
  return (
    // <Modal className={`${activeModal ? 'active' : ''}`}></Modal>
    <Modal visible={activeModal}>
      <div className="close-button" onClick={toggleModal}/>
      {children}
    </Modal>
  );
}



