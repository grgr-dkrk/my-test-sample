import { ofType, Epic } from 'redux-observable';
import { from, ObservableInput } from 'rxjs/';
import { mergeMap, map, filter } from 'rxjs/operators';
import * as Api from './api';
import { addColor, fetchLuckyColorData } from './actions';
import { ActionTypes, ColorPanelType, DataType } from './types';
import { AppState } from '@/store/';

export const fetchLuckyColorEpic: Epic<
  ActionTypes,
  ReturnType<typeof fetchLuckyColorData>,
  AppState
> = (action$, state$) =>
  action$.pipe(
    ofType<ActionTypes>('fetchLuckyColorPanel'),
    mergeMap(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (): ObservableInput<any> => {
        const token: string =
          (state$.value.User.data && state$.value.User.data.token) || '';
        return from(Api.FetchLuckyColor(token)).pipe(
          map(payload =>
            addColor({
              id: state$.value.ColorPanelList.items.length,
              ...payload,
            })
          )
        );
      }
    )
  );
