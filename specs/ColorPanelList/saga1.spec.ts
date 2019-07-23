import 'regenerator-runtime/runtime';
import {
  addColor,
  failureFetchLuckyColor,
} from '@/modules/ColorPanelList/actions';
import { handleFetchLuckyColorData } from '@/modules/ColorPanelList/saga';
import * as Api from '@/modules/ColorPanelList/api';
import { getUser } from '@/modules/ColorPanelList/saga';
import { select, put, call } from 'redux-saga/effects';

describe('Redux Sa・Ga', () => {
  let gen: ReturnType<typeof handleFetchLuckyColorData>;

  beforeEach(() => {
    gen = handleFetchLuckyColorData();
  });

  it('ラッキーカラーとカラーコードを取得して、AddActionを実行', () => {
    const result: ReturnType<typeof addColor> = {
      type: 'addColorPanel',
      payload: { id: 3, label: '情熱の赤', colorCode: 'red' },
    };
    expect(gen.next().value).toEqual(select(getUser));
    expect(gen.next(null).value).toEqual(call(Api.FetchLuckyColor, null));
    expect(gen.next(result.payload).value).toEqual(put(result));
    expect(gen.next().done).toBe(true);
  });

  it('エラーの時', () => {
    expect(gen.next().value).toEqual(select(getUser));
    gen.next();
    expect(gen.next().value).toEqual(put(failureFetchLuckyColor()));
    expect(gen.next().done).toBe(true);
  });
});
