import { select, call, put, takeLatest } from 'redux-saga/effects';
import {
  addColor,
  failureFetchLuckyColor,
} from '@/modules/ColorPanelList/actions';
import { AppState } from '@/store/';
import { DataType } from '@/modules/ColorPanelList/types';
import * as Api from './api';

export const getUser = (state: AppState) => state.User;

export function* handleFetchLuckyColorData() {
  try {
    const user: ReturnType<typeof getUser> = yield select(getUser);
    const token = user && user.data && user.data.token ? user.data.token : null;
    const data: DataType = yield call(Api.FetchLuckyColor, token);
    yield put<ReturnType<typeof addColor>>({
      type: 'addColorPanel',
      payload: {
        id: 3,
        label: data.label,
        colorCode: data.colorCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put<ReturnType<typeof failureFetchLuckyColor>>({
      type: 'failueFetchLuckyColor',
    });
  }
}

function* mySaga() {
  yield takeLatest('fetchLuckyColorData', handleFetchLuckyColorData);
}

export default mySaga;
