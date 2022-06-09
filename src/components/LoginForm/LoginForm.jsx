import { Component } from "react";
import { logIn } from '../../utilities/users-service';
import { CForm, 
        CFormLabel, 
        CFormText, 
        CFormInput, 
        CButton } from '@coreui/react';

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
        // console.log(this.state.name);
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <CForm autoComplete="on" onSubmit={this.handleSubmit}>
                        <CFormText>User Name: {FormData.name}</CFormText>
                        <CFormLabel>Name: </CFormLabel>
                        <CFormInput type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <CFormLabel>Password</CFormLabel>
                        <CFormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                        <CFormLabel>Confirm</CFormLabel>
                        <CFormInput type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <CButton type="submit">LOGIN</CButton>
                    </CForm>
                </div>
                <h4 className="error-message">&nbsp;{this.state.error}</h4>
            </div>
        );
    }
}