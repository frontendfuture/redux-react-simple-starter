import configureStore from './redux/configureStore'
import {Provider} from 'react-redux'
import Root from './containers/Root'
import React, { Component } from 'react'
import {render} from 'react-dom'
import { syncReduxAndRouter } from 'react-router-redux'
import {hashHistory} from 'react-router'
import { Route, IndexRoute } from 'react-router'


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
