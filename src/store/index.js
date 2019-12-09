import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '../reducers';

const middlewares = [thunk];
export default createStore(AppReducer, applyMiddleware(...middlewares));
