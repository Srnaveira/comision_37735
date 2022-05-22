import './navbars.scss';

const NavBarUser = () => {
        return(
            <nav className="nav__users">
                <ul className="nav__users__ul">
                    <li className="Nav__useres__ul--li">
                        LOGIN
                    </li>
                    <li className="Nav__useres__ul--li">
                        CREATE USER
                    </li>
                </ul>
            </nav>
        );
}

export default NavBarUser;