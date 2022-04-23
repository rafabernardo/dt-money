import React from 'react'

import Header from '_components/header'
import Dashboard from '_components/dashboard'
import { TransactionsContextProvider } from '_hooks/TransactionsContext'
import '_styles/global.css'

const App = () => {
  return (
    <TransactionsContextProvider>
      <Header />
      <Dashboard />
    </TransactionsContextProvider>
  )
}

export default App
