import React from 'react'

import ListTransactions from '_components/list-transactions'
import Summary from '_components/summary'
import TransactionsTable from '_components/transactions-table'
import { useWindowSize } from '_hooks/use-Window-size'

import styles from './styles.css'

const Dashboard = () => {
  const { isDesktop } = useWindowSize()

  return (
    <section className={styles.container}>
      <Summary />
      {isDesktop ? <TransactionsTable /> : <ListTransactions />}
    </section>
  )
}

export default Dashboard
