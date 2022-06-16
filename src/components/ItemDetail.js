import {useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    const { addItem, isInCart, cart } = useContext(CartContext)

    const [numvendido, setNumVendido] = useState(0)

    const onAdd = () => {
        if(numvendido === 0) return
    
        const itemCarrito = {
                    ...item,
                    numvendido
        }

        isInCart(item.id) ? console.log("El item ya se encuentra en el carrito =>", itemCarrito)
        : addItem(itemCarrito)

        console.log("el Contenido del carrito =>", cart)
    }



    return(
        <div className='div__detail'>
            <div className='div__detail__encabezados'>    
                <h1 className="titulo">{item.titulo}</h1>
                <h3 className="autor">{item.autor}</h3>
            </div>    
            <div className='div__detail__detalle'>
                    <div className='div__detail__detalle--imagen'>
                            <img src={item.imagen}></img>
                    </div>    
                    <div className='div__detail__detalle--resto'>
                            <p>{item.resumen}</p>
                            <span> $ {item.precio} </span>
                            <div className='div__detail__detalle--compra'>
                                <ItemCount 
                                    stock={item.stock}
                                    initial={'0'}
                                    counter={numvendido}
                                    setCounter={setNumVendido}
                                    onAdd={ onAdd }
                                />
                            </div>
                    </div>            
            </div>
        </div>
    );
} 

export default ItemDetail;