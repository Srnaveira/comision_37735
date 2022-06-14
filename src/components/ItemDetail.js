import {useState} from "react";
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    const [numvendido, setNumVendido] = useState(0)

    const onAdd = () => {
        console.log(numvendido)
        const itemCarrito = {
            ...item,
            numvendido
        }
        console.log(itemCarrito)
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