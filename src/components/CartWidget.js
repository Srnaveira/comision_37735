import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import CardButton from './CardButton';
import './cartwidget.css';


const CartWidget = () => {

  const { cart } = useContext(CartContext)

    return(         
        <div className="div_principal">
            <div className="">
              <Link to='/cart'>
              <label className="">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="carrito" fill="none"  stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="numero">{cart.length}</span>
                </div>
              </label>
              </Link>
            </div>
        </div>   
    );


}

export default CartWidget;

//<CardButton/>