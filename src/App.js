import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {login} from './action/action'

class App extends Component {
    clickLogin(event) {
        this.props.onchangeClick();
        this.props.history.push("/main/router1");
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.clickLogin.bind(this)}>登录</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.msg
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onchangeClick: () => dispatch(login())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)



