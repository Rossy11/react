/**
 * Created by Rossy1 on 2018/11/13.
 */
import React, { Component } from 'react';

class child extends Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:"啦啦啦啦"
        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <div>接受父组件传的值为：{this.props.message}</div>
                <button onClick={()=>this.props.getsonToPar(this.state.msg)}>传值给父组件</button>
            </div>
        )
    }
}

export default child;