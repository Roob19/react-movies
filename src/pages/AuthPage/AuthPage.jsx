import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
import { CContainer, CForm, CButton } from '@coreui/react';

export default function AuthPage ({setUser}) {
    
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <CContainer>
                <h1>AuthPage</h1>
                <CForm autoComplete="off">
                    <CButton onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</CButton>
                    {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
                </CForm>
            </CContainer>
        </main>
    );
}
