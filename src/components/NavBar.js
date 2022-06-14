import './navbar.scss'
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () =>{
    return(
        <nav className="nav__menu">
            <ul className="nav__menu__ul__logo">
                <li className="" style={{fontSize: '20px', fontWeight: 'bold'}}><Link to={"/"}>EL BAUL</Link></li>
                <li><a href="">GENEROS</a>
                    <ul>
                        <li><Link to={'/genero/ACCION'}>ACCION</Link></li>
                        <li><Link to={'/genero/CIENCIA-FICCION'}>CIENCIA-FICCION</Link></li>
                        <li><Link to={'/genero/FANTASIA'}>FANTASIA</Link></li>
                        <li><Link to={'/genero/HISTORICO'}>HISTORICO</Link></li>
                    </ul>
                </li>
            </ul>
            <ul className="nav__menu__ul__action">
                <li className="cajaDeTexto"><input className="cajaDeTexto2" type="text" value="QUE ESTAS BUSCANDO?"></input></li>
                <li className="busqueda">BUSCAR</li>
                <CartWidget></CartWidget>
                <li className="user">USUARIO</li>
            </ul>
        </nav>

    );

}

export default NavBar