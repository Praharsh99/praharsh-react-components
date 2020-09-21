import React from 'react'

import styles from './black-white-button.styles.css'

const BlackWhiteButton = ({ styleProp, children, ...otherProps }) => {
  return (
    <button
      style={styleProp}
      className={styles.blackWhiteButton}
      {...otherProps}
    >
      {children || 'Hello'}
    </button>
  )
}

export default BlackWhiteButton
