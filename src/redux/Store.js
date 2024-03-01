import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import index from './reducers/index';
const store = createStore(index, applyMiddleware(thunk))
export default store;