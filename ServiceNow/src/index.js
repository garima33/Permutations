import reducers from './reducers'
import middleware from './middlewares'
import AppContainer from './containers'
import Permutaion from './components'
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import configureStore, {configureMiddlewares, configureReducers} from './store'
import { Actions, raiseAction} from './actions'

configureMiddlewares(logger())
configureMiddlewares(middleware)
configureReducers(reducers)

export class Permutaions extends Component {

  constructor(props) {
    super(props);
    this.appStore = configureStore();
     this.appStore.dispatch(raiseAction(Actions.COMPONENT_INITIALIZING))
  }

  render() {
    return (
      <Provider store={this.appStore}>
        <AppContainer>
          <Permutaion/>
        </AppContainer>
      </Provider>
    )
  }
}