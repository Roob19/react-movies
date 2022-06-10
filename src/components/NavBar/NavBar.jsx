import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (
        <nav>
            <h1>Welcome {props.user.name}</h1>
            <hr></hr>
            <Link to="/movies">Movie Index</Link>
                &nbsp; | &nbsp;
            <Link to="/actors">Actor Index</Link>
                &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log In</Link>
        </nav>
    );
}