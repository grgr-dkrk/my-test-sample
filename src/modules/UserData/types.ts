import * as Actions from './actions';
import { ActionType } from 'redux-actions-type';

export type UserStateType = {
  name: string;
  token: string;
};

export type StatusType = 'fetching' | 'success' | 'failure';

export type StateType = {
  data: UserStateType | null;
  status: StatusType;
};

export type ActionTypes = ActionType<typeof Actions>;
