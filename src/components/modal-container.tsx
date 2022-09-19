import { ReactNode } from "react";
import { Container, Modal } from "../styles/components/modal-container";




export interface ModalProps {
  children: ReactNode;
  activeModal: boolean;
  toggleModal: () => void;

}
export default function ModalContainer({ children, activeModal, toggleModal }: ModalProps) {
  return (
    <Modal className={`${activeModal && 'active'}`} visible>
      <Container>
        {children}
      </Container>
      <span className="close-button" onClick={toggleModal} aria-hidden="true">&times;</span>
    </Modal>
  );
}



