import React from 'react'

import styles from './bounce-loader.styles.css'

const BounceLoader = ({
  height = '14px',
  width = '14px',
  loaderColor = '#8385aa'
}) => {
  const style = {
    height,
    width,
    backgroundColor: loaderColor || ''
  }

  return (
    <div className={styles.bounceLoader}>
      <div style={style}>{}</div>
      <div style={style}>{}</div>
      <div style={style}>{}</div>
    </div>
  )
}

export default BounceLoader
