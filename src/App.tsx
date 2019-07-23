import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorPallet from '@/containers/ColorPallet';
import { Provider } from 'react-redux';
import store from '@/store/';
import './common.css';

ReactDOM.render(
  <Provider store={store}>
    <ColorPallet />
  </Provider>,
  document.getElementById('root')
);
