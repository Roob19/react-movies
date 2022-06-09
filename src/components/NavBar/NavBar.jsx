import { Link } from 'react-router-dom';

export default function NavBar({user}) {
    return (
        <nav>
            <Link to="/movies">Movie Index</Link>
                &nbsp; | &nbsp;
            <Link to="/actors">Actor Index</Link>
                &nbsp; | &nbsp;
            <Link to="/login">Log In</Link>
        </nav>
    );
}