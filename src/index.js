import React from 'react';
import ReactDOM from 'react-dom';
import ReactShadowRoot from 'react-shadow-root';
import Extension from './Extension';
import './global.scss';

const injectWrapper = document.body;
const app = document.createElement('div');
app.id = 'meet-actions';
if (injectWrapper) injectWrapper.prepend(app);

// without #shadow-dom
// ReactDOM.render(<Extension />, document.getElementById('meet-actions'));
// with #shadow-dom
ReactDOM.render(
  <ReactShadowRoot>
    <Extension />
  </ReactShadowRoot>,
  document.getElementById('meet-actions'),
);
