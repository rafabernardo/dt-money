import React, { FormEvent, useState } from 'react'
import classesNames from 'classnames'
import Modal from 'react-modal'

import CloseIcon from '_assets/close.svg'
import OutcomeIcon from '_assets/outcome.svg'
import IncomeIcon from '_assets/income.svg'
import { useTransactions } from '_hooks/use-transactions'
import { ITransaction } from '_types/transactions'
import { TRANSACTION_TYPES } from '_utils/constants'

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
  const { createTransaction } = useTransactions()
  const [type, setType] = useState(TRANSACTION_TYPES.DEPOSIT)
  const [values, setValues] = useState({})

  const handleSetTypeDeposit = () => {
    setType(TRANSACTION_TYPES.DEPOSIT)
  }

  const handleSetTypeWithdraw = () => {
    setType(TRANSACTION_TYPES.WITHDRAW)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const payload = { ...values, type: type }
    await createTransaction(payload as ITransaction)
    onClose()
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
                  [styles.deposit]: type === TRANSACTION_TYPES.DEPOSIT,
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
                  [styles.withdraw]: type === TRANSACTION_TYPES.WITHDRAW,
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
