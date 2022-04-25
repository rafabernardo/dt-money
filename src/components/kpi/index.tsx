import React, { useMemo } from 'react'
import classesNames from 'classnames'
import { PulseLoader } from 'react-spinners'

import { TRANSACTION_TYPES_LABEL } from '_utils/constants'
import { useWindowSize } from '_hooks/use-Window-size'
import { IKpiProps } from '_types/kpi'

import styles from './styles.css'

const Kpi = ({ value, icon, type, createdAt, isLoading }: IKpiProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 12 ~ Kpi ~ createdAt', createdAt)
  const { isDesktop } = useWindowSize()

  return (
    <div className={styles['kpi-container']}>
      {isLoading ? (
        <div className={styles.loading}>
          <PulseLoader color="var(--green)" size={10} />
        </div>
      ) : (
        <>
          <h2 className={styles.title}>{TRANSACTION_TYPES_LABEL[type]}</h2>
          <svg viewBox={icon.viewBox} className={styles.icon}>
            <use xlinkHref={`#${icon.id}`} />
          </svg>
          <p className={styles.text}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(value)}
          </p>
          {!isDesktop && (
            <p className={styles['small-text']}>
              Última entrada dia
              {createdAt
                ? new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))
                : ''}
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default Kpi
