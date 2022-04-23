import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'

import App from './views/app'

createServer({
  environment: 'development',
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 100,
          type: 'deposit',
          category: 'food',
          createdAt: new Date('2021-03-15 08:00:00'),
        },
      ],
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
