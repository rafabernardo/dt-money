import React, { useCallback, useMemo } from 'react'
import classesNames from 'classnames'

import IncomeLogo from '_assets/income.svg'
import OutcomeLogo from '_assets/outcome.svg'
import TotalLogo from '_assets/total.svg'
import { useTransactions } from '_hooks/use-transactions'
import { TRANSACTION_TYPES, TRANSACTION_TYPES_LABEL } from '_utils/constants'
import { useWindowSize } from '_hooks/use-Window-size'
import Kpi from '_components/kpi'

import styles from './styles.css'

const KPI_TYPES = {
  ...TRANSACTION_TYPES,
  TOTAL: 'total',
}

const KPI_ICONS = {
  [KPI_TYPES.DEPOSIT]: IncomeLogo,
  [KPI_TYPES.WITHDRAW]: OutcomeLogo,
  [KPI_TYPES.TOTAL]: TotalLogo,
}

const Summary = () => {
  const { transactions, status } = useTransactions()

  const { isDesktop } = useWindowSize()

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          switch (transaction.type) {
            case TRANSACTION_TYPES.DEPOSIT:
              acc[KPI_TYPES.DEPOSIT] += Number(transaction.amount)
              acc[KPI_TYPES.TOTAL] += Number(transaction.amount)
              break
            case TRANSACTION_TYPES.WITHDRAW:
              acc[KPI_TYPES.WITHDRAW] -= Number(transaction.amount)
              acc[KPI_TYPES.TOTAL] -= Number(transaction.amount)
              break

            default:
              break
          }
          return acc
        },
        {
          [KPI_TYPES.DEPOSIT]: 0,
          [KPI_TYPES.WITHDRAW]: 0,
          [KPI_TYPES.TOTAL]: 0,
        }
      ),
    [transactions]
  )

  const getLastTransactionCreatedAt = useCallback(
    (type) => {
      const transactionsSort = [...transactions].sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })

      return type === KPI_TYPES.TOTAL
        ? transactionsSort.shift()?.createdAt.toString()
        : transactionsSort
            .find((transaction) => transaction.type === type)
            ?.createdAt.toString()
    },
    [transactions]
  )

  return (
    <div className={styles.container}>
      {Object.values(KPI_TYPES).map((type, index) => (
        <Kpi
          type={type}
          key={`${type}-${index}`}
          value={summary[type]}
          icon={KPI_ICONS[type]}
          createdAt={getLastTransactionCreatedAt(type)}
          isLoading={status !== 'success'}
        />
      ))}
    </div>
  )
}

export default Summary
