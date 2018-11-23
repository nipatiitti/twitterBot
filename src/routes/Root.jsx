import React from 'react'
import PropTypes from 'prop-types'

import {
  Router,
  Route,
  Switch
} from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import history from './history'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Overlays from '../components/Overlays'

import Main from '../components/Main'
import Add from '../components/AddAccount'
import Edit from '../components/EditAccount'

import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#03a9f4',
        },
        contrastThreshold: 3,
    },
})

const Root = ({ store, persistor }) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
        <Router history={history}>
          <div className="root-container">
            <Header />
            <Menu />
            <Overlays />
            <Switch>
              <Route exact path='/' >
                <Main />
              </Route>
              <Route exact path='/add' >
                <Add />
              </Route>
              <Route exact path='/edit/:id' >
                <Edit />
              </Route>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired
}

export default Root
