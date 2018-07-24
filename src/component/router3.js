/**
 * Created by Rossy1 on 2018/5/7.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'

class router3 extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="App">
                <h1>{this.props.message}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.msg
    }
}
export default connect(
    mapStateToProps
)(router3)

