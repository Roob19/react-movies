import LoginForm from "../../components/LoginForm/LoginForm";
import { CForm, CFormText } from '@coreui/react';
import './LoginPage.css'

export default function LoginPage({setUser}) {
    return (
        <CForm>
            <CFormText>LoginPage</CFormText>
            <LoginForm setUser={setUser} />
        </CForm>
    );
}
