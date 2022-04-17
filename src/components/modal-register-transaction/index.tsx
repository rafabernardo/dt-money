import React from 'react'
import classesNames from 'classnames'
import Modal from 'react-modal'

import CloseIcon from '../../assets/close.svg'
import OutcomeIcon from '../../assets/outcome.svg'
import IncomeIcon from '../../assets/income.svg'
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
            <svg viewBox={CloseIcon.viewBox} className={styles.close}>
              <use xlinkHref={`#${CloseIcon.id}`} />
            </svg>
          </button>

          <h2 className={styles.title}>Cadastrar transação</h2>
        </section>
        <section className={styles.body}>
          <form className={styles.form}>
            <input className={styles.input} placeholder="Título" />
            <input className={styles.input} placeholder="Valor" type="number" />
            <div className={styles['buttons-wrapper']}>
              <button className={styles.button}>
                <svg viewBox={OutcomeIcon.viewBox} className={styles.icon}>
                  <use xlinkHref={`#${OutcomeIcon.id}`} />
                </svg>
                <span className={styles.label}>Saída</span>
              </button>
              <button className={styles.button}>
                <svg viewBox={IncomeIcon.viewBox} className={styles.icon}>
                  <use xlinkHref={`#${IncomeIcon.id}`} />
                </svg>
                <span className={styles.label}>Entrada</span>
              </button>
            </div>
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
