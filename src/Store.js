import {
    createStore, 
    applyMiddleware, 
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AppReducer from './Reducers/AppReducer';

export const Store = createStore (
    AppReducer,
    applyMiddleware(thunk, logger)
)