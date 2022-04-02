import React from 'react'

import Logo from '../../assets/logo.svg'

import styles from './styles.css'

const Header = () =>{
  return <header>
   <svg viewBox={Logo.viewBox} >
        <use xlinkHref={`#${Logo.id}`} />
      </svg>
  </header>
}

export default Header
