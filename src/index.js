import React from 'react';
import ReactDOM from 'react-dom';
import Template from './App';

import Portal from './Portal';
import * as config from './Config/reducers';

import './styles.scss';

window.env = "development";

ReactDOM.render(
  <Portal config={config} env={window.env}>
    <Template />
  </Portal>,
  document.getElementById('root')
);
