import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';


export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
        { user ? 
          <>

          </>
          :
          <LoginPage />
        }
    </main>
  );
}
