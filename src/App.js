import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store/index';

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import PlayerBar from './pages/player/app-player-bar/index';


const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
        <PlayerBar />
      </HashRouter>
    </Provider>
  )
})

export default App