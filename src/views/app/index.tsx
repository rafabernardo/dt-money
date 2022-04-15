import React, { useEffect } from 'react'
import Header from '../../components/header'
import Dashboard from '../../components/dashboard'
import { api } from '../../services/requests'

import '../../styles/global.css'

const App = () => {
  useEffect(() => {
    api.get('/transactions').then((response: any) => console.log(response))
  }, [])

  return (
    <>
      <Header />
      <Dashboard />
    </>
  )
}

export default App
