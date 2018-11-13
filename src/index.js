import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import main from './component/main';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route
}from 'react-router-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer/reducer'

let store = createStore(reducer);

ReactDOM.render(
    (
        <Provider store = {store}>
            <Router>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/main" component={main}/>
                </div>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)

//用于在生产环境中为用户在本地创建一个service worker来缓存资源到本地，提升应用的访问速度
registerServiceWorker();
