import React from 'react';

import styles from './alert.styles.css';

const Alert = ({ type, children }) => {
  const types = {
    success: {
      backgroundColor: '#09e26445',
      color: '#1ad318',
    },
    error: {
      backgroundColor: '#e9084b45',
      color: '#e9084b',
    },
    warning: {
      backgroundColor: '#eace0b45',
      color: '#eac40b',
    },
    primary: {
      backgroundColor: ' #09a4e245',
      color: '#0995e7',
    },
    secondary: {
      backgroundColor: 'rgba(208, 208, 208, 0.45)',
      color: '#000',
    },
  };

  type = types.hasOwnProperty(type) ? type : 'primary';

  const style = {
    ...types[type],
  };

  return (
    <div style={style} className={styles.alert}>
      {children || 'This is an alert message'}
    </div>
  );
};

export default Alert;
