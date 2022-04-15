import React from 'react'
import Summary from '../summary'
import TransactionsTable from '../transactions-table'

import styles from './styles.css'

const Dashboard = () => (
  <section className={styles.container}>
    <Summary />
    <TransactionsTable />
  </section>
)

export default Dashboard
