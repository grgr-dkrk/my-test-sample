import reducer, { initialState } from '@/modules/ColorPanelList/reducer';
import { addColor, removeColor } from '@/modules/ColorPanelList/actions';
import { StateType } from '@/modules/ColorPanelList/types';

describe('ColorPanelListのReducer', () => {
  let state: StateType;

  beforeEach(() => {
    state = reducer(
      initialState,
      addColor({ id: 10, label: '漆黒の黒', colorCode: '#000' })
    );
  });
  it('addAction', () => {
    expect(state).toMatchSnapshot();
  });
  it('removeAction', () => {
    let newState = reducer(state, removeColor(10));
    expect(newState).toMatchSnapshot();
  });
});
