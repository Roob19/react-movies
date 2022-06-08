import { Component } from "react";

export default class LoginForm extends Component {
    state = {
        username: 'Test', 
        error: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, 
            error: ''
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="on" onSubmit={this.handleSubmit}>
                        <label>Username: </label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                        <button type="submit" disabled={false}>LOGIN</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}