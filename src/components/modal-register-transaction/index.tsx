import React, { FormEvent, useState } from 'react'
import classesNames from 'classnames'
import Modal from 'react-modal'

import CloseIcon from '../../assets/close.svg'
import OutcomeIcon from '../../assets/outcome.svg'
import IncomeIcon from '../../assets/income.svg'
import styles from './styles.css'
import { api } from '_services/requests'

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
  const [type, setType] = useState('deposit')
  const [values, setValues] = useState({})

  const handleSetTypeDeposit = () => {
    setType('deposit')
  }

  const handleSetTypeWithdraw = () => {
    setType('withdraw')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const payload = { ...values, type }
    api.post('/transaction', payload)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              placeholder="Título"
              name="title"
              onChange={onChange}
            />
            <input
              className={styles.input}
              placeholder="Valor"
              type="number"
              name="amount"
              onChange={onChange}
            />
            <div className={styles['buttons-wrapper']}>
              <button
                className={classesNames(styles.button, {
                  [styles.deposit]: type === 'deposit',
                })}
                onClick={handleSetTypeDeposit}
                type="button"
              >
                <svg viewBox={IncomeIcon.viewBox} className={styles.icon}>
                  <use xlinkHref={`#${IncomeIcon.id}`} />
                </svg>
                <span className={styles.label}>Entrada</span>
              </button>
              <button
                className={classesNames(styles.button, {
                  [styles.withdraw]: type === 'withdraw',
                })}
                onClick={handleSetTypeWithdraw}
                type="button"
              >
                <svg viewBox={OutcomeIcon.viewBox} className={styles.icon}>
                  <use xlinkHref={`#${OutcomeIcon.id}`} />
                </svg>
                <span className={styles.label}>Saída</span>
              </button>
            </div>
            <input
              className={styles.input}
              placeholder="Categoria"
              name="category"
              onChange={onChange}
            />
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
