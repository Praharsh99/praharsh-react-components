import React from 'react'

import styles from './spin-loader.styles.css'

const SpinLoader = ({ ...otherProps }) => {
  const style = {
    borderColor: otherProps.spinnerParentColor || '#f3f3f3',
    borderTopColor: otherProps.spinnerColor || '#3498db',
    height: otherProps.length || '80px',
    width: otherProps.length || '80px',
    borderWidth: otherProps.thickness || '6px'
  }

  return (
    <div style={style} className={styles.spinLoader}>
      {}
    </div>
  )
}

export default SpinLoader
