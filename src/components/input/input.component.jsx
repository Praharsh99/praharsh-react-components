import React from 'react'

import styles from './input.styles.css'

const Input = ({ type = 'text', ...otherProps }) => {
  const inputType =
    type === 'text' || type === 'password' || type === 'email' ? type : 'text'

  return <input type={inputType} className={styles.input} {...otherProps} />
}

export default Input
