import React from 'react';

import styles from './input.styles.css';

const Input = ({ type, variant, ...otherProps }) => {
  const variantClassName = variant || 'default';

  const inputType =
    type === 'text' || type === 'password' || type === 'email' ? type : 'text';

  return (
    <div className={styles.inputContainer}>
      <input
        type={inputType}
        className={`${styles.input} ${styles['input--' + variantClassName]}`}
        {...otherProps}
      />

      <label className={styles.inputLabel}>
        {otherProps.label || 'Enter Here'}
      </label>
    </div>
  );
};

export default Input;
