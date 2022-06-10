import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { CForm, 
    CFormLabel, 
    CFormText, 
    CFormInput, 
    CButton } from '@coreui/react';

export default class SignUpForm extends Component {

    state = {
        name: '', 
        email: '', 
        password: '', 
        confirm: '', 
        error: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, 
            error: ''
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({error: 'Sign Up Failed from SignUpForm handleSubmit - Try Again'});
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <CForm autoComplete="current-password" onSubmit={this.handleSubmit}>
                        <CFormLabel>Name: </CFormLabel>
                            <CFormInput type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <CFormLabel>Email: </CFormLabel>
                            <CFormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} require />
                        <CFormLabel>Password: </CFormLabel>
                            <CFormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} require />
                        <CFormLabel>Confirm: </CFormLabel>
                            <CFormInput type="confirm" name="confirm" value={this.state.confirm} onChange={this.handleChange} require />
                        <CButton type="submit">LOG IN</CButton>
                    </CForm>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}
