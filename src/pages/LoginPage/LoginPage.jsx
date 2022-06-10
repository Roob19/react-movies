import LoginForm from "../../components/LoginForm/LoginForm";
import { CForm, CFormText } from '@coreui/react';

export default function LoginPage({setUser}) {
    return (
        <CForm>
            <CFormText>LoginPage</CFormText>
            <LoginForm setUser={setUser} />
        </CForm>
    );
}
