import './App.css';
import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import MovieIndexPage from '../MovieIndexPage/MovieIndexPage';
import MovieDetail from '../../components/MovieDetailPage/MovieDetailPage';
import ActorIndexPage from '../ActorIndexPage/ActorIndexPage';
import { getUser } from '../../utilities/users-service';
import { movies } from '../../utilities/data';

export default function App() {
  
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">React Movies
      <p>Welcome {user}</p>
        { user ? 
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/movies/detail">
                <MovieDetail />
              </Route>
              <Route path="/actors">
                <ActorIndexPage movies={movies} />
              </Route>
              <Route path="/movies">
                <MovieIndexPage movies={movies} />
              </Route>
              <Redirect to="/movies" />
            </Switch>
          </>
          :
          <AuthPage setUser={setUser} />
        }
    </main>
  );
}
