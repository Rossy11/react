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


ReactDOM.render(
    (
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/main" component={main}/>
            </div>
        </Router>
    ),
    document.getElementById('root')
)

registerServiceWorker();
