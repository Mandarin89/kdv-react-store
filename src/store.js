import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduser from './reducers';

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));

export default store;