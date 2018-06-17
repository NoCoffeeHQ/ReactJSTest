import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { content, definitions } from './localData';


ReactDOM.render(
  <App
    content={content}
    definitions={definitions}
  />,
  document.getElementById('root')
);

registerServiceWorker();
