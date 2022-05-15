import React from 'react'

import { useTransactions } from '_hooks/use-transactions'
import styles from './styles.css'

const TransactionsTable = () => {
  const { transactions } = useTransactions()

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={styles[transaction.type]}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionsTable
