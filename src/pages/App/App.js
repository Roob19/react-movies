import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import MovieIndexPage from '../MovieIndexPage/MovieIndexPage';


export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
        { user ? 
          <>
            <Route path="/movies">
              <MovieIndexPage />
            </Route>
            <Redirect to="/movies" />
          </>
          :
          <LoginPage />
        }
    </main>
  );
}
