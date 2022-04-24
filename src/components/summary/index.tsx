import React, { useMemo } from 'react'
import classesNames from 'classnames'

import IncomeLogo from '_assets/income.svg'
import OutcomeLogo from '_assets/outcome.svg'
import TotalLogo from '_assets/total.svg'
import { useTransactions } from '_hooks/use-transactions'
import { TRANSACTION_TYPES, TRANSACTION_TYPES_LABEL } from '_utils/constants'

import styles from './styles.css'

const Summary = () => {
  const { transactions } = useTransactions()

  const { total, outcome, income } = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          switch (transaction.type) {
            case TRANSACTION_TYPES.DEPOSIT:
              acc.income += Number(transaction.amount)
              acc.total += Number(transaction.amount)
              break
            case TRANSACTION_TYPES.WITHDRAW:
              acc.outcome -= Number(transaction.amount)
              acc.total -= Number(transaction.amount)
              break

            default:
              break
          }
          return acc
        },
        {
          outcome: 0,
          income: 0,
          total: 0,
        }
      ),
    [transactions]
  )

  return (
    <div className={styles.container}>
      <div className={styles['kpi-container']}>
        <h2 className={styles.title}>
          {TRANSACTION_TYPES_LABEL[TRANSACTION_TYPES.DEPOSIT]}
        </h2>
        <svg viewBox={IncomeLogo.viewBox} className={styles.icon}>
          <use xlinkHref={`#${IncomeLogo.id}`} />
        </svg>
        <p className={styles.text}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(income)}
        </p>
      </div>
      <div className={styles['kpi-container']}>
        <h2 className={styles.title}>
          {TRANSACTION_TYPES_LABEL[TRANSACTION_TYPES.WITHDRAW]}
        </h2>
        <svg viewBox={OutcomeLogo.viewBox} className={styles.icon}>
          <use xlinkHref={`#${OutcomeLogo.id}`} />
        </svg>
        <p className={styles.text}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(outcome)}
        </p>
      </div>
      <div className={classesNames(styles['kpi-container'], styles.highlight)}>
        <h2 className={styles.title}>Total</h2>
        <svg viewBox={TotalLogo.viewBox} className={styles.icon}>
          <use xlinkHref={`#${TotalLogo.id}`} />
        </svg>
        <p className={styles.text}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </p>
      </div>
    </div>
  )
}

export default Summary
