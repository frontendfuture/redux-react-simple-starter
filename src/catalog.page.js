
import {Provider} from 'react-redux'
import Root from './containers/Root'
import React, { Component } from 'react'
import {render} from 'react-dom'

import {hashHistory} from 'react-router'
import { Route, IndexRoute} from 'react-router'

let rootElement = document.getElementById('render')

import CalculatorLayout from './layouts/Calculator'
import CatalogIndex from './views/catalog'

let routes = (
  <Route path="/" component={CalculatorLayout}>
    <IndexRoute component={CatalogIndex} />
  </Route>
)

render(<Root routes={routes} history={hashHistory} />, rootElement)
