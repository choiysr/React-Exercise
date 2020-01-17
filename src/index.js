import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
// 모든 reducers폴더 내의 reducer를 가져온다
import {rootReducer} from "./day9_reducers"


// 이  store는 모든 action이 발생하면 rootReducer로 간다. 
const store = createStore(rootReducer)

ReactDOM.render(
    // Provider로 감싸 이 안의 내용(<app />)이 children이 된다. 
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
