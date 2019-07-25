import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { combineEpics } from 'redux-observable';
import ColorPanelList from './ColorPanelList/reducer';
import ColorPanelListSaga from './ColorPanelList/saga';
import ColorPanelListEpic from './ColorPanelList/epic';
import User from './UserData/reducer';

export const rootReducers = combineReducers({ ColorPanelList, User });

export const rootEpic = combineEpics(ColorPanelListEpic);

export function* rootSagas() {
  yield fork(ColorPanelListSaga);
}
