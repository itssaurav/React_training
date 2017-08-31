import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Kishore,Demo,number} from './componets/kishore.js';
import {Basic,number,Controller} from './componets/basic.js';
import registerServiceWorker from './registerServiceWorker';


console.log(number);
// ReactDOM.render(<Demo />, document.getElementById('app'));
ReactDOM.render(<div><Basic/><Kishore/><Demo/><p>{number}</p><Controller/></div>, document.getElementById('app'));
registerServiceWorker();
