import React, { Component } from "react";
import Login from "../LoSign/Login"
import Sign  from "../LoSign/Sign";
class LogSign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        login: true,
        };
    }
    
    myLogin = () => {
        this.setState({ login: true });
    };
    
    mySignup = () => {
        this.setState({ login: false });
    };
    
    render() {
        return (
        <div>
            {this.state.login ? <myLogin /> : <mySignup />}
            <button onClick={this.viewLogin}>Login</button>
            <button onClick={this.viewSignup}>Signup</button>
        </div>
        );
    }
}

export default LogSign;