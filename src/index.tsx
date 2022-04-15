import React from 'react'
import ReactDOM from 'react-dom'
import { createServer } from 'miragejs'

import App from './views/app'

createServer({
  environment: 'development',
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        { id: 1, title: 'Transaction 1', amount: 100, type: 'deposit', category: 'food', createdAt: new Date() },
      ]
    })
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
