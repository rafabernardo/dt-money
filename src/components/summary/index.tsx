import React from 'react'
import classesNames from 'classnames'

import IncomeLogo from '../../assets/income.svg'
import OutcomeLogo from '../../assets/outcome.svg'
import TotalLogo from '../../assets/total.svg'

import styles from './styles.css'

const Summary = () => (
  <div className={styles.container}>
    <div className={styles['kpi-container']}>
      <h2 className={styles.title}>Entradas</h2>
      <svg viewBox={IncomeLogo.viewBox} className={styles.icon}>
        <use xlinkHref={`#${IncomeLogo.id}`} />
      </svg>
      <p className={styles.text}>R$ 1.000,00</p>
    </div>
    <div className={styles['kpi-container']}>
      <h2 className={styles.title}>Saídas</h2>
      <svg viewBox={OutcomeLogo.viewBox} className={styles.icon}>
        <use xlinkHref={`#${OutcomeLogo.id}`} />
      </svg>
      <p className={styles.text}>R$ 1.000,00</p>
    </div>
    <div className={classesNames(styles['kpi-container'], styles.highlight)}>
      <h2 className={styles.title}>Total</h2>
      <svg viewBox={TotalLogo.viewBox} className={styles.icon}>
        <use xlinkHref={`#${TotalLogo.id}`} />
      </svg>
      <p className={styles.text}>R$ 1.000,00</p>
    </div>
  </div>
)

export default Summary
