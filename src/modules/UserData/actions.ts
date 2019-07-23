import { UserStateType, StatusType } from './types';

export const fetchUserData = () =>
  ({
    type: 'fetchUserData',
  } as const);

export const setUserData = (payload: UserStateType) =>
  ({
    type: 'setUserData',
    payload,
  } as const);

export const setUserDataStatus = (payload: StatusType) =>
  ({
    type: 'setUserDataStatus',
    payload,
  } as const);
