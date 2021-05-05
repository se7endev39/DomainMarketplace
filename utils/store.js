import { createStore, applyMiddleware } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

export const makeStore = (context) => {
    const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
    return store;
};
export const wrapper = createWrapper(makeStore, { debug: true });