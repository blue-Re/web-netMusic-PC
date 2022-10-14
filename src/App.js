import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'


const App = memo(() => {
  return (
    <HashRouter>
      <AppHeader />
      { renderRoutes(routes) }
      <AppFooter />
    </HashRouter>
  )
})

export default App