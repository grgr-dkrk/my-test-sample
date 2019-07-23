import ColorPallet from '@/components/ColorPallet/';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '@/store';
import * as Actions from '@/modules/ColorPanelList/actions';
import { ColorPanelType, ActionTypes } from '@/modules/ColorPanelList/types';

const mapStateToProps = (state: AppState) => {
  return {
    items: state.ColorPallet.items,
    user: state.UserData.data,
  };
};

export type MapDispatchTypes = {
  add: (data: ColorPanelType) => void;
  remove: (id: number) => void;
  fetchData: () => void;
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
    fetchData: () => dispatch(Actions.fetchLuckyColorData()),
  };
};

/**
 * Connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPallet);
