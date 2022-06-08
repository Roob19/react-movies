import React from 'react';
import { Component } from "react";

export default class LoginForm extends Component {
    state = {
        userName: '', 
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
        this.setState({
            [e.target.name]: e.target.value, 
            error: ''
        });
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="on" onSubmit={this.handleSubmit}>
                        <label>Username: </label>
                        <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} required />
                        <button type="submit" disabled={false}>LOGIN</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}