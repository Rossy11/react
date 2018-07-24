import React, {Component} from 'react';
import './App.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {login} from './action/action'

class App extends Component {
    clickLogin(event) {
        this.props.onIncreaseClick();
        this.props.history.push("/main/router3");

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

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.msg
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncreaseClick: () => dispatch(login())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


