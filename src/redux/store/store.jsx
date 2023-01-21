import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import catReducer from '../reducers/catsReducer'

const store = createStore(catReducer, applyMiddleware(thunk))

export default store;