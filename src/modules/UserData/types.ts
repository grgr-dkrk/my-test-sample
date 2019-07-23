import * as Actions from './actions';
import { ActionType } from 'redux-actions-type';

export type UserStateType = {
  name: string;
  token: string;
};

export type StateType = {
  data: UserStateType | null;
};

export type ActionTypes = ActionType<typeof Actions>;
