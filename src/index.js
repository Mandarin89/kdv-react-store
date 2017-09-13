import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import reduser from './reducers';


const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
     document.getElementById('root'));



