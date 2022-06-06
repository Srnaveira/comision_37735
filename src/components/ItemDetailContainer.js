import './itemdetailcontainer.scss';
import { useState, useEffect } from 'react';
import { cargarProductos } from '../mock/cargarProductos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({numero}) => {
    console.log(numero)
    const [item, setItem] = useState([])
    const [id, setId] = useState(null)

    
    
    useEffect(() => {
        setId(numero)
        cargarProductos()
               .then((resp) =>{
                    setItem( resp.find( (item) => item.id === Number(id)) )
               })
               .catch((error) =>{
                    console.log("Error reportado :" , error)
               })
    }, [id, numero])

    return(
        <div className='contenedor__detail'>
            <ItemDetail item={item} />
        </div>
   
        )

}


export default ItemDetailContainer;