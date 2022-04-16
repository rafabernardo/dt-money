import React, { useState } from 'react'

import Logo from '../../assets/logo.svg'
import ModalRegisterTransaction from '../modal-register-transaction'

import styles from './styles.css'

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const onToggleModal = () => {
    setModalOpen((prevState) => !prevState)
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <svg viewBox={Logo.viewBox} className={styles.icon}>
          <use xlinkHref={`#${Logo.id}`} />
        </svg>
        <button onClick={onToggleModal} className={styles.button}>
          Nova Transação
        </button>
      </div>

      {isModalOpen && (
        <ModalRegisterTransaction
          isOpen={isModalOpen}
          onClose={onToggleModal}
        />
      )}
    </header>
  )
}

export default Header
