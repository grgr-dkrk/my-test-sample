import 'regenerator-runtime/runtime';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { select, call } from 'redux-saga/effects';
import {
  addColor,
  failureFetchLuckyColor,
} from '@/modules/ColorPanelList/actions';
import { handleFetchLuckyColorData } from '@/modules/ColorPanelList/saga';
import * as Api from '@/modules/ColorPanelList/api';
import { getUser } from '@/modules/ColorPanelList/saga';
import { DataType } from '@/modules/ColorPanelList/types';

describe('Redux Sa・Ga2', () => {
  const data: DataType = {
    label: '情熱の赤',
    colorCode: 'red',
  };
  const fakeUser = {
    data: {
      token: '12345678',
    },
  };
  const fakeAddColorPanel = (): ReturnType<typeof addColor> => ({
    type: 'addColorPanel',
    payload: { id: 3, ...data },
  });

  it('ラッキーカラーとカラーコードを取得して、AddActionを実行', () => {
    return expectSaga(handleFetchLuckyColorData, Api)
      .provide([
        [select(getUser), fakeUser],
        [call(Api.FetchLuckyColor, fakeUser.data.token), data],
      ])
      .put(fakeAddColorPanel())
      .run();
  });

  it('エラー', () => {
    const error = new Error('invalid token');
    return expectSaga(handleFetchLuckyColorData, Api)
      .provide([
        [select(getUser), null],
        [call(Api.FetchLuckyColor, null), throwError(error)],
      ])
      .put(failureFetchLuckyColor())
      .run();
  });
});
