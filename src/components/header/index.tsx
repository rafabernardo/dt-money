import React from 'react'

import Logo from '../../assets/logo.svg'

import styles from './styles.css'

const Header = () =>{
  return <header>
    <svg aria-hidden="true" className={styles.icon} focusable="false">
        <use xlinkHref={Logo} />
      </svg>
  </header>
}

export default Header
