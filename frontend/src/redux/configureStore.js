import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import users from 'redux/modules/users';

import { composeWithDevTools } from 'redux-devtools-extension';
//import Reactotron from 'ReactotronConfig';

const env = process.env.NODE_ENV;
const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

if (env === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const reducer = combineReducers({
    router: connectRouter(history),
    users
});

let store;

if (env === 'development') {
    store = initialState =>
        //Reactotron.createStore(
        //    reducer,
        //    composeWithDevTools(applyMiddleware(...middlewares)));
        createStore(
            reducer,
            composeWithDevTools(applyMiddleware(...middlewares)));
}else{
    store = initialState =>
        createStore(reducer, applyMiddleware(...middlewares));
}


export { history };
export default store();
