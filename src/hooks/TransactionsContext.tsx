import React, { createContext, useState, useEffect, useContext } from 'react'

import { api } from '_services/requests'
import {
  ITransactionsContext,
  ITransaction,
  ITransactionsProviderProps,
} from '_types/transactions'

const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
)

export const TransactionsContextProvider: React.FC = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((response: any) => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: ITransaction) => {
    const response = await api.post('/transaction', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data
    setTransactions((prevState) => [...prevState, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context
}
