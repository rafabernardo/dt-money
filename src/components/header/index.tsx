import React from 'react'

import Logo from '../../assets/logo.svg'

import styles from './styles.css'

const Header = () =>{
  return <header className={styles.container}>
   <svg viewBox={Logo.viewBox} className={styles.icon} >
        <use xlinkHref={`#${Logo.id}`} />
      </svg>
      <h1 className={styles.title}>teste</h1>
  </header>
}

export default Header
