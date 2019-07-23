import { combineReducers } from 'redux';
import ColorPanelList from './ColorPanelList/reducer';
import User from './UserData/reducer';
import ColorPanelListSaga from './ColorPanelList/saga';
import { fork } from 'redux-saga/effects';

export const rootReducers = combineReducers({ ColorPanelList, User });
export function* rootSagas() {
  yield fork(ColorPanelListSaga);
}
