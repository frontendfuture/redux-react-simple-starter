import {Provider} from 'react-redux'
import Root from './containers/Root'
import React, { Component } from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'
import { Route, IndexRoute } from 'react-router'
import * as AuthService from './services/AuthService'
import config from './app.config'
import * as GC from './components/GeneralComponent'


window.AuthService = AuthService
window.config = config
window.GC = GC

let rootElement = document.getElementById('render')


// routing
import CalculatorLayout from './layouts/Calculator'
import DashboardIndex from './views/dashboard'


let routes =  (
    <Route path="/" component={CalculatorLayout}>
        <IndexRoute component={DashboardIndex} />
    </Route>
)

render(<Root routes={routes} history={hashHistory} />, rootElement)
