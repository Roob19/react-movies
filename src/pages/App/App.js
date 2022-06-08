import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import MovieIndexPage from '../MovieIndexPage/MovieIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import ActorIndexPage from '../ActorIndexPage/ActorIndexPage';


export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">React Movies
      <p>{user.username}</p>
        { user ? 
          <>
            <NavBar />
            <Switch>
              <Route path="/actors">
                <ActorIndexPage />
              </Route>
              <Route path="/movies">
                <MovieIndexPage />
              </Route>
              <Redirect to="/movies" />
            </Switch>
          </>
          :
            <LoginPage />
        }
    </main>
  );
}
