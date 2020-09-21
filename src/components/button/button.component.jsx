import React from 'react'

import styles from './button.styles.css'

const Button = ({ styleProp, type = 'default', children, ...otherProps }) => {
  const types = {
    success: {
      backgroundColor: '#09e264'
    },
    error: {
      backgroundColor: '#e9084b'
    },
    warning: {
      backgroundColor: '#eace0b'
    },
    primary: {
      backgroundColor: ' #09a4e2'
    },
    default: {
      backgroundColor: 'rgb(223, 223, 223)',
      color: '#000'
    }
  }

  const style = {
    ...styleProp,
    ...types[type]
  }

  return (
    <button style={style} className={styles.button} {...otherProps}>
      {children || 'Hello'}
    </button>
  )
}

export default Button
