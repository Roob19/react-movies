import { Component } from "react";
import { logIn } from '../../utilities/users-service';

export default class LoginForm extends Component {
    state = {
        name: '', 
        password: '', 
        confirm: '', 
        error: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, 
            error: ''
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // alert(JSON.stringify(this.state.user));
        try {
            const formData = {...this.state};
            delete formData.error;
            const user = await logIn(formData);
        } catch {
            this.setState({ error : 'Log In Failed in LoginForm.js handleSubmit - Try Again'});
        }
        // console.log(user);
        // console.log(props);
        console.log(this.state.name);
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="on" onSubmit={this.handleSubmit}>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}
                               required/>
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit">LOGIN</button>
                    </form>
                    <p>User Name: {FormData.name}</p>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}