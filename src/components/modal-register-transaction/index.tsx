import React from 'react'
import classesNames from 'classnames'
import Modal from 'react-modal'

import Close from '../../assets/close.svg'
import styles from './styles.css'

interface ModalRegisterTransactionProps {
  isOpen: boolean
  className?: string
  onClose: () => void
}

Modal.setAppElement('#root')

const ModalRegisterTransaction = ({
  isOpen,
  onClose,
  className,
}: ModalRegisterTransactionProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className={classesNames(styles.modal, className)}
      overlayClassName={styles.overlay}
    >
      <div className={styles.container}>
        <section className={styles.header}>
          <button className={styles['close-button']} onClick={onClose}>
            <svg viewBox={Close.viewBox} className={styles.close}>
              <use xlinkHref={`#${Close.id}`} />
            </svg>
          </button>

          <h2 className={styles.title}>Cadastrar transação</h2>
        </section>
        <section className={styles.body}>
          <form className={styles.form}>
            <input className={styles.input} placeholder="Título" />
            <input className={styles.input} placeholder="Valor" type="number" />
            <input className={styles.input} placeholder="Categoria" />
            <button className={styles['button-submit']} type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </div>
    </Modal>
  )
}

export default ModalRegisterTransaction
