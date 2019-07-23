import ColorPanelList from '@/components/ColorPanelList/';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '@/store';
import * as Actions from '@/modules/ColorPanelList/actions';
import { ColorPanelType, ActionTypes } from '@/modules/ColorPanelList/types';

const mapStateToProps = (state: AppState) => {
  return {
    items: state.ColorPanelList.items,
    user: state.User.data,
  };
};

export type MapDispatchTypes = {
  add: (data: ColorPanelType) => void;
  remove: (id: number) => void;
  fetch: () => void;
};

/**
 * Dispatch
 */
const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypes>
): MapDispatchTypes => {
  return {
    add: data => dispatch(Actions.addColor(data)),
    remove: id => dispatch(Actions.removeColor(id)),
    fetch: () => dispatch(Actions.fetchLuckyColorData()),
  };
};

/**
 * Connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPanelList);
