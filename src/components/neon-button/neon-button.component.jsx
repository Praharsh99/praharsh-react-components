import React from 'react'

import styles from './neon-button.styles.css'

const NeonButton = ({
  styleProp,
  type = 'primary',
  children,
  ...otherProps
}) => {
  const types = {
    success: {
      backgroundColor: '#09e264',
      boxShadow: '0px 1px 30px -5px rgba(9, 226, 99, 0.5)'
    },
    error: {
      backgroundColor: '#e9084b',
      boxShadow: ' 0px 1px 30px -5px rgb(233, 8, 75, 0.5)'
    },
    warning: {
      backgroundColor: '#eace0b',
      boxShadow: '0px 1px 30px -5px rgba(226, 193, 9, 0.5)'
    },
    primary: {
      backgroundColor: ' #09a4e2',
      boxShadow: '0px 1px 30px -5px rgba(9, 164, 226, 0.5)'
    }
  }

  const style = {
    ...styleProp,
    ...types[type]
  }

  console.log(style)
  return (
    <button style={style} className={styles.neonButton} {...otherProps}>
      {children || 'Hello'}
    </button>
  )
}

export default NeonButton
