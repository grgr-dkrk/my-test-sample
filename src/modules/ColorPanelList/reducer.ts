import { StateType, ActionTypes } from '@/modules/ColorPanelList/types';

/**
 * State
 */
export const initialState: StateType = {
  items: [],
};

/**
 * Reducer
 */
export default function reducer(
  state: StateType = initialState,
  action: ActionTypes
): StateType {
  switch (action.type) {
    case 'addColorPanel':
      return {
        ...state,
        items: [...state.items, { ...action.payload, published: '20190724' }],
      };
    case 'removeColorPanel':
      return {
        ...state,
        items: state.items.filter(item => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}
