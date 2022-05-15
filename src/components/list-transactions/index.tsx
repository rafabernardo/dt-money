import React, { useMemo } from 'react'
import classnames from 'classnames'

import { useTransactions } from '_hooks/use-transactions'
import styles from './styles.css'

const ListTransactions = () => {
  const { transactions } = useTransactions()

  const item = useMemo(
    () => (transactions.length > 1 ? 'items' : ''),
    [transactions]
  )

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Listagem</h2>
        <p className={styles.text}>
          {transactions.length} {item}
        </p>
      </div>
      <div className={styles.content}>
        {transactions.map((transaction) => (
          <div key={transaction.id} className={styles.card}>
            <h2 className={styles['card-title']}>{transaction.title}</h2>
            <p
              className={classnames(
                styles['card-amount'],
                styles[transaction.type]
              )}
            >
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(transaction.amount)}
            </p>
            <p className={styles['card-category']}>{transaction.category}</p>
            <p className={styles['card-date']}>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListTransactions
