import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Multielement} from './componets/multiElement.js';

import {Basic,data,Controller} from './componets/basic.js';

import registerServiceWorker from './registerServiceWorker';



// ReactDOM.render(<Demo />, document.getElementById('app'));
ReactDOM.render(<div>
                  <Basic/>
                   <p>{data}</p>
                  <Controller/>
                  <Multielement/>
               </div>, document.getElementById('app'));
registerServiceWorker();
