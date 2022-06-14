import './itemdetailcontainer.scss';
import { useState, useEffect } from 'react';
import { cargarProductos } from '../mock/cargarProductos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

const ItemDetailContainer = () => {
   
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams() 
    const id = Number(itemId)
    console.log(id)
   

    useEffect(() => {
        setLoading(true)
            cargarProductos()
                .then((resp) =>{
                    setItem( resp.find((item) => item.id === id) )
                    console.log(item)
                    })
                .catch((error) =>{
                    console.log("Error reportado :" , error)
                })
                .finally(() =>{
                    setLoading(false)
                })
    }, [])

    return(
        <div className='contenedor__detail'>
            {
                loading
                ?   <Spinner />
                :   <ItemDetail item={item} />         
            }
         </div>
        )

}


export default ItemDetailContainer;