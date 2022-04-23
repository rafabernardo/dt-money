import React from 'react'
import Summary from '_components/summary'
import TransactionsTable from '_components/transactions-table'

import styles from './styles.css'

const Dashboard = () => (
  <section className={styles.container}>
    <Summary />
    <TransactionsTable />
  </section>
)

export default Dashboard
