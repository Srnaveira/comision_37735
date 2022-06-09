import './itemdetailcontainer.scss';
import { useState, useEffect } from 'react';
import { cargarProductos } from '../mock/cargarProductos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
   
    const [item, setItem] = useState([])
    const [id, setId] = useState(null)

    const { itemId } = useParams() 


    useEffect(() => {
        setId(itemId)
        cargarProductos()
               .then((resp) =>{
                    setItem( resp.find( (item) => item.id === Number(id)) )
               })
               .catch((error) =>{
                    console.log("Error reportado :" , error)
               })
    }, [id, itemId])

    return(
        <div className='contenedor__detail'>
            <ItemDetail item={item} />
        </div>
   
        )

}


export default ItemDetailContainer;