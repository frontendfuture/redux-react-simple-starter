import configureStore from './redux/configureStore'
import {Provider} from 'react-redux'
import Root from './containers/Root'
import React, { Component } from 'react'
import {render} from 'react-dom'
import { syncReduxAndRouter } from 'react-router-redux'
import {hashHistory} from 'react-router'
import routes from './routes/index'

let store = configureStore()
let rootElement = document.getElementById('render')


render(<Root routes={routes} history={hashHistory} />, rootElement)
