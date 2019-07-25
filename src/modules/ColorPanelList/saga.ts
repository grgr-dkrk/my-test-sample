import { select, call, put, takeEvery } from 'redux-saga/effects';
import {
  addColorPanel,
  failureFetchLuckyColorData,
} from '@/modules/ColorPanelList/actions';
import { AppState } from '@/store/';
import { DataType } from '@/modules/ColorPanelList/types';
import * as Api from './api';

export const getUser = (state: AppState) => state.User;
export const getItems = (state: AppState) => state.ColorPanelList.items;

export function* handleFetchLuckyColorData() {
  try {
    const user: ReturnType<typeof getUser> = yield select(getUser);
    const items: ReturnType<typeof getItems> = yield select(getItems);
    const token = user && user.data && user.data.token ? user.data.token : null;
    const data: DataType = yield call(Api.FetchLuckyColor, token);
    yield put<ReturnType<typeof addColorPanel>>({
      type: 'addColorPanel',
      payload: {
        id: items.length,
        label: data.label,
        colorCode: data.colorCode,
      },
    });
  } catch (error) {
    console.error(error);
    yield put<ReturnType<typeof failureFetchLuckyColorData>>({
      type: 'failureFetchLuckyColorData',
    });
  }
}

function* mySaga() {
  yield takeEvery('fetchLuckyColorData', handleFetchLuckyColorData);
}

export default mySaga;
