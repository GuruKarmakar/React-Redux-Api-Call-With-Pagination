import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'


//reducers
import employeeReducer from './reducers/employeeReducer'

const store = createStore(
    combineReducers({employeeReducer}),
    {},
    applyMiddleware(logger,thunk))

export default store