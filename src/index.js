import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import CodeList from './components/CodeList';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import{ subjectsReducer } from './reducers/subject';

//const subjects1 = ["serialize details", "endpoint walkthrough"];

const store = createStore(subjectsReducer, applyMiddleware(thunk));
store.getState();

ReactDOM.render(

    <Provider store={store} >
        <CodeList />
    </Provider>, 

document.getElementById('root'));
registerServiceWorker();








