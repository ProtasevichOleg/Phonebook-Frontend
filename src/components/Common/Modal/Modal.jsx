import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer, CloseBtnWrapper } from './Modal.styled';
import { ContactForm } from 'components/FormPartials';
import CloseBtn from '../CloseBtn/CloseBtn';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal }) => {
  return createPortal(
    <Backdrop onClick={() => toggleModal(false)}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseBtnWrapper>
          <CloseBtn onClick={() => toggleModal(false)} />
        </CloseBtnWrapper>
        <ContactForm />
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
