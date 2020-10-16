import React from 'react';
import ReactDOM from 'react-dom';

import Extension from './Extension';
import './global.scss';

const injectWrapper = document.body;
const app = document.createElement('div');
app.id = 'meet-actions';
if (injectWrapper) injectWrapper.prepend(app);

ReactDOM.render(
  <React.StrictMode>
    <Extension />
  </React.StrictMode>,
  document.getElementById('meet-actions'),
);
