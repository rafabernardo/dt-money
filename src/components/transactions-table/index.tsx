import React from 'react'
import classesNames from 'classnames'

import styles from './styles.css'

const TransactionsTable = () => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr>
        <th>Titulo</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody className={styles.tbody}>
      <tr>
        <td>Almoço</td>
        <td className={classesNames({[styles.deposit]: true})}>R$100.00</td>
        <td>Restaurante</td>
        <td>10/10/2018</td>
      </tr>
      <tr>
        <td>Almoço</td>
        <td className={classesNames({[styles.withdraw]: true})}>R$100.00</td>
        <td>Restaurante</td>
        <td>10/10/2018</td>
      </tr>
    </tbody>
  </table>
)

export default TransactionsTable
