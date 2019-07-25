import { StateType, ActionTypes } from './types';

/**
 * State
 */
export const initialState: StateType = {
  data: {
    name: 'dkrk',
    token: '',
  },
};

/**
 * Reducer
 */
export default function reducer(
  state: StateType = initialState,
  action: ActionTypes
) {
  switch (action.type) {
    case 'setUserData':
      return {
        ...state,
      };
    default:
      return state;
  }
}
