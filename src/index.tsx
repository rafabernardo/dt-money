import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'

import App from './views/app'

createServer({
  environment: 'development',
  models: {
    transactions: Model,
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })
    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return data
    })
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
