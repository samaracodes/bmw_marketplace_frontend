import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import allCars from './reducers/allCars'

const reducer = combineReducers({
    allCars
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store