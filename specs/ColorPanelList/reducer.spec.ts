import reducer, { initialState } from '@/modules/ColorPanelList/reducer';
import {
  addColorPanel,
  removeColorPanel,
} from '@/modules/ColorPanelList/actions';
import { StateType } from '@/modules/ColorPanelList/types';

describe('ColorPanelListのReducer', () => {
  let state: StateType;

  beforeEach(() => {
    state = reducer(
      initialState,
      addColorPanel({ id: 10, label: '漆黒の黒', colorCode: '#000' })
    );
  });
  it('addAction', () => {
    expect(state).toMatchSnapshot();
  });
  it('removeAction', () => {
    let newState = reducer(state, removeColorPanel(10));
    expect(newState).toMatchSnapshot();
  });
});
