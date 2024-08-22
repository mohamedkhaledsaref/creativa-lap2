import React, { Component } from "react";
import ""

class Contan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        cont: 1,
        };
}
    
    decrement = () => {
        if (this.state.cont > 1) {
        this.setState({ cont: this.state.cont - 1 });
        }
    };
    
    increment = () => {
        this.setState({ cnt: this.state.cont + 1 });
    };
    render() {
        return (
            <div className="contener">
                <button onClick={this.decrement}>Decrement</button>
                <h1>Counter: {this.state.cont}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={() => this.setState({ cont: 1 })}>Reset</button>
            </div>
        )
    }

}

export default Contan;
