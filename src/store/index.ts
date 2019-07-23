import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducers } from '@/modules/';

const store = createStore(rootReducers, applyMiddleware(logger));

export type AppState = ReturnType<typeof store.getState>;

export default store;
