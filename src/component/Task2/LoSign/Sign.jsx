import { Component } from "react";

class Sign extends Component {
    render() {
    return (
    <div>
        <h1>Sign Up Page</h1>
        <form>
        <div>
            <label>First Name</label>
            <br />
            <input type="text"></input>
            <br />
            <label>Last Name</label>
            <br />
            <input type="text"></input>
            <br />
            <label>Age</label>
            <br />
            <input type="number"></input>
            <br />
            <label>Email</label>
            <br />
            <input type="email"></input>
            <br />
            <label>Password</label>
            <br />
            <input type="password"></input>
            <br />
            <button >Sign Up</button>
        </div>
        </form>
    </div>
    );
}
}
export default Sign;