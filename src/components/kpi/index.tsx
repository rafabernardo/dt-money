import React, { useMemo } from 'react'
import classesNames from 'classnames'
import { PulseLoader } from 'react-spinners'

import { TRANSACTION_TYPES_LABEL, TRANSACTION_TYPES } from '_utils/constants'
import { useWindowSize } from '_hooks/use-Window-size'
import { IKpiProps } from '_types/kpi'

import styles from './styles.css'

const Kpi = ({ value, icon, type, createdAt, isLoading }: IKpiProps) => {
  const { isDesktop } = useWindowSize()

  const statusBackgroundColor = useMemo(() => {
    if (type === TRANSACTION_TYPES.TOTAL && value > 0) {
      return '#33cc95'
    }
    if (type === TRANSACTION_TYPES.TOTAL && value < 0) {
      return '#e62e4d'
    }
    return 'white'
  }, [type, value])

  return (
    <div
      className={styles['kpi-container']}
      style={{ background: statusBackgroundColor }}
    >
      {isLoading ? (
        <div className={styles.loading}>
          <PulseLoader color="var(--green)" size={10} />
        </div>
      ) : (
        <>
          <h2
            className={classesNames(styles.title, {
              [styles.total]: type === TRANSACTION_TYPES.TOTAL,
            })}
          >
            {TRANSACTION_TYPES_LABEL[type]}
          </h2>
          <svg viewBox={icon.viewBox} className={styles.icon}>
            <use xlinkHref={`#${icon.id}`} />
          </svg>
          <div className={styles.content}>
            <p
              className={classesNames(styles.text, {
                [styles.total]: type === TRANSACTION_TYPES.TOTAL,
              })}
            >
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(value)}
            </p>
            {!isDesktop && createdAt && (
              <p
                className={classesNames(styles['small-text'], {
                  [styles.total]: type === TRANSACTION_TYPES.TOTAL,
                })}
              >
                Última entrada dia
                {new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Kpi
