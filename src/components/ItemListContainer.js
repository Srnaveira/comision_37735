import { useEffect, useState } from 'react';
import { cargarProductos } from '../mock/cargarProductos';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './itemlistcontainer.css';
import Spinner from './Spinner';


const ItemListContainer = () =>{

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { generoId } = useParams()
    

    useEffect(() => {
        setLoading(true)
        cargarProductos()
            .then((resp) => {
               if (!generoId) {
                    setItems(resp)

               } else {
                    setItems( resp.filter( (item) => item.genero.toUpperCase() === generoId ) )
               } 
                          
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [generoId])

    return(
        <div className="principalContenedor">
            {
                loading
                ?   <Spinner/>
                :   <ItemList items={items}/>





            }
            
        </div>
        );

}

export default ItemListContainer