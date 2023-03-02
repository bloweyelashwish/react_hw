import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const ModalBackdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children, onClose, title }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <p>{title}</p>
      </div>
      <div className={classes.content}>
        {children}
      </div>
      <div className={classes.footer}>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export const Modal = (props) => {
  return (
    <>
      {createPortal(<ModalBackdrop {...props}/>, document.getElementById('backdrop'))}
      {createPortal(<ModalOverlay {...props}/>, document.getElementById('overlay'))}
    </>
  )

}