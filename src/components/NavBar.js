import './navbars.scss'
import CartWidget from './CartWidget';

const NavBar = () =>{
    return(
        <nav className="nav__menu">
            <ul className="nav__menu__ul__logo">
                <li className="">EL BAUL</li>
                <li><a href="">GENEROS</a>
                    <ul>
                        <li>ACCION</li>
                        <li>CIENCIA-FICCION</li>
                        <li>FANTASIA</li>
                        <li>TERROR</li>
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