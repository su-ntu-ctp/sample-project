import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

const BackDrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

function Modal({ onClose, children }) {
  return (
    <>
      {createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{ children }</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;
