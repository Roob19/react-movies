import { useState } from "react";
import * as usersService from '../../utilities/users-service';
import { CForm, 
        CFormLabel, 
        CFormText, 
        CFormInput, 
        CButton } from '@coreui/react';

export default function LogIn({setUser}) {
    
    const [credentials, setCredentials] = useState({
        email: '', 
        password: ''
    });
    
    const [error, setError] = useState('');

    function handleChange(e) {
        setCredentials({...credentials, [e.target.name]: e.target.value});
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed from LoginForm handleSubmit - Try Again');
        }
    }

    return (
        <div>
            <div className="form-container" onSubmit={handleSubmit}>
                <CForm autoComplete="off">
                    {/* <CFormText>{credentials.name}</CFormText> */}
                    <CFormLabel>Email: </CFormLabel>
                    <CFormInput type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <CFormLabel>Password</CFormLabel>
                    <CFormInput type="password" name="password" value={credentials.password} onChange={handleChange} required/>
                    <CButton type="submit">LOG IN</CButton>
                </CForm>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}
