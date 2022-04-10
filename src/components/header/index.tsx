import React from 'react'

import Logo from '../../assets/logo.svg'

import styles from './styles.css'

const Header = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <svg viewBox={Logo.viewBox} className={styles.icon}>
        <use xlinkHref={`#${Logo.id}`} />
      </svg>
      <button className={styles.button}>Nova Transação</button>
    </div>
  </header>
)

export default Header
