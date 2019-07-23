import { combineReducers } from 'redux';
import ColorPallet from './ColorPanelList/reducer';
import User from './UserData/reducer';

export const rootReducers = combineReducers({ ColorPallet, User });
