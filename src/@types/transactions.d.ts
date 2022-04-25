export interface ITransaction {
  id?: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string | ''
}

export interface ITransactionsContext {
  transactions: ITransaction[]
  createTransaction: (transaction: ITransaction) => void
  status: string
  error: string | null
}

export interface ITransactionsProviderProps {
  children: React.ReactNode
}

export interface ITransactionsResponse {
  transactions: ITransaction[]
}
