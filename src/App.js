import React, {Component} from 'react';
import './App.css';

class App extends Component {
    clickLogin(event) {
        this.props.history.push("/main/router1");
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.clickLogin.bind(this)}>登录</button>
            </div>
        );
    }
}

export default App;

