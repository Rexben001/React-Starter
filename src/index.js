import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// const currentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }

// const greetings = <h1>Hello world. The time is {currentDate()}</h1>;

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>,
 document.getElementById('root'));

serviceWorker.unregister();
