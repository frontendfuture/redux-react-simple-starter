import { combineReducers } from 'redux'
import {routeReducer as routing} from 'react-router-redux'
import user from './reducers/user'

let rootReducer = combineReducers({user, routing: routing})

export default rootReducer