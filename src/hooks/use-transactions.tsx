import React, { createContext, useState, useEffect, useContext } from 'react'

import { api } from '_services/requests'
import {
  ITransactionsContext,
  ITransaction,
  ITransactionsProviderProps,
  ITransactionsResponse,
} from '_types/transactions'
import { useAsync } from '_hooks/use-async'

const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
)

export const TransactionsContextProvider: React.FC = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const getTransactions = () => {
    return api.get('/transactions')
  }

  const { execute, status, value, error } = useAsync<ITransactionsResponse>(
    getTransactions,
    false
  )

  useEffect(() => {
    setTimeout(() => {
      execute()
    }, 2000)
  }, [])

  useEffect(() => {
    if (value) {
      const { transactions } = value
      setTransactions(transactions)
    }
  }, [value])

  const createTransaction = async (transactionInput: ITransaction) => {
    const response = await api.post('/transaction', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data
    setTransactions((prevState) => [...prevState, transaction])
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, status, error, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  return context
}
