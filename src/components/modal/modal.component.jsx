import React from 'react';

import styles from './modal.styles.css';

const Modal = ({ children, isOpen = false }) => {
  return isOpen ? (
    <div className={styles.modalContainer}>{children}</div>
  ) : null;
};

export default Modal;
