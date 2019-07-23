import * as Actions from './actions';
import { ActionType } from 'redux-actions-type';

/**
 * ColorPanel
 */
export type ColorPanelType = {
  id: number;
  label?: string;
  colorCode: string;
  published?: string;
};

export type DataType = Omit<ColorPanelType, 'id' | 'published'>;

/**
 * State
 */
export type StateType = {
  items: ColorPanelType[];
};

/**
 * ActionTypes
 */
export type ActionTypes = ActionType<typeof Actions>;
