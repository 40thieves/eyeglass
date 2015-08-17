import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import middleware from './middleware'
import * as reducers from './reducers'

const createStoreWithMiddleware = compose(
	applyMiddleware(...middleware),
	createStore
)

export default createStoreWithMiddleware(
	combineReducers(reducers)
)