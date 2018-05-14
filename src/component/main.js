/**
 * Created by Rossy1 on 2018/5/7.
 */
import React,{ Component } from "react";
import router1 from './router1';
import router2 from './router2';
import router3 from './router3';
import "./main.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
}from 'react-router-dom';

class main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <NavLink to="/main/router1" className="tab">路由1</NavLink>
                        <NavLink to="/main/router2" className="tab">路由2</NavLink>
                        <NavLink to="/main/router3" className="tab">路由3</NavLink>
                    </div>
                    <hr />
                    <Route exact path="/main/router1" component={router1}/>
                    <Route path="/main/router2" component={router2}/>
                    <Route path="/main/router3" component={router3}/>
                </div>
            </Router>
        );
    }
}

export default main;

