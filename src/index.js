
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import CodeList from './components/CodeList';

import App from './components/App';
import {reducer as formReducer} from 'redux-form'

import loginReducer from './reducers/loginReducer';
import {subtopicReducer} from './reducers/subtopic';

import './index.css';


import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import{ subjectsReducer } from './reducers/subject';
import authReducer from './reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';

const reducer = combineReducers({
    login: loginReducer,
    app: subjectsReducer,
    subtopics: subtopicReducer,
    form: formReducer,
    auth: authReducer
   
})


const store = createStore(
     reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
    
   
     );
store.getState();

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}


ReactDOM.render(
    <Provider store={store} >
        <App />
        
    </Provider>, 

document.getElementById('root'));
registerServiceWorker();