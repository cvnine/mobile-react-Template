import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './utils/ajax';
import { createHashHistory } from 'history';

const history = createHashHistory()

ReactDOM.render(<App history={history} />, document.getElementById('root'));

