import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import App from './App';
import './utils/ajax';

import './index.scss';

// react-router 在4.x版本后已经将自带的history独立成一个history模块
const history = createHashHistory()

ReactDOM.render(<App history={history} />, document.getElementById('root'));

