import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';


import { routerReducer } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import CodeList from './components/CodeList';
import {reducer as snippetFormReducer} from 'redux-form'



import './index.css';


import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import{ subjectsReducer } from './reducers/subject';

//const subjects1 = ["serialize details", "endpoint walkthrough"];
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const reducer = combineReducers({
    subjectsReducer,
    form: snippetFormReducer
     
})

const store = createStore(
    reducer,
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  ,
    applyMiddleware(thunk)
     );
store.getState();

ReactDOM.render(
    <Provider store={store} >
        <CodeList />
        
    </Provider>, 

document.getElementById('root'));
registerServiceWorker();
