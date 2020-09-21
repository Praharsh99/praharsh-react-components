import React from 'react'
import styles from './styles.module.css'

import BlackWhiteButton from './components/black-white-button/black-white-button.component'
import NeonButton from './components/neon-button/neon-button.component'
import Button from './components/button/button.component'
import BounceLoader from './components/bounce-loader/bounce-loader.component'
import SpinLoader from './components/spin-loader/spin-loader.component'
import Input from './components/input/input.component'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {
  ExampleComponent,
  Button,
  BlackWhiteButton,
  NeonButton,
  BounceLoader,
  SpinLoader,
  Input
}
