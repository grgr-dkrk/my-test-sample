import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducers, rootSagas } from '@/modules/';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSagas);

export type AppState = ReturnType<typeof store.getState>;

export default store;
