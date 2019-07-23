import { UserStateType } from './types';

export const fetchUserData = () =>
  ({
    type: 'fetchUserData',
  } as const);

export const setUserData = (payload: UserStateType) =>
  ({
    type: 'setUserData',
    payload,
  } as const);
