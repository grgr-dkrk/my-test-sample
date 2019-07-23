import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ColorPanelList from '@/containers/ColorPanelList';
import { Provider } from 'react-redux';
import store from '@/store/';
import './common.css';

ReactDOM.render(
  <Provider store={store}>
    <ColorPanelList />
  </Provider>,
  document.getElementById('root')
);
