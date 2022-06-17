import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import './cart.scss'

const Cart = () =>{

    const { cart, removeItem } = useContext(CartContext)

    return(

        <div className="contenedorCarrito">
            
            {
            cart.map((productos) => (
                <div key={productos.id} className="productos">
                        <img className="imagenes" src={productos.imagen}/>
                        <div className="informacion">
                            <h2 className="titulo" style={{textTransform: 'uppercase'}}>{productos.titulo}</h2>
                            <h3 className="autor">{productos.autor}</h3>
                            <div className="informacion__compra">
                                <p className="comprados">Cantidad:  {productos.numvendido}</p>
                                <h6 className="precio">Precio: ${productos.precio * productos.numvendido}</h6>
                                <button onClick={() => removeItem(productos.id)} className="Eliminar">Eliminar</button>
                            </div>
                        </div>
                </div>
            ))

            }    
            
        </div>
        

    )



}


export default Cart 

