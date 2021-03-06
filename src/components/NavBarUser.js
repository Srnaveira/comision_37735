import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBarUser = () => {
        return(
            <nav className="nav__users">
                <ul className="nav__users__ul">
                    <li className="Nav__useres__ul--li">
                        <Link to={"/login"}>
                            LOGIN
                        </Link>
                    </li>
                    <li className="Nav__useres__ul--li">
                        CREATE USER
                    </li>
                </ul>
            </nav>
        );
}

export default NavBarUser;