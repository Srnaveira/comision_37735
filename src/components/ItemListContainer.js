import { useEffect, useState } from 'react';
import { cargarProductos } from '../mock/cargarProductos';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './itemlistcontainer.css';


const ItemListContainer = () =>{

    const [items, setItems] = useState([])
    const { generoId } = useParams()
    

    useEffect(() => {
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
    }, [generoId])

    return(
        <div className="principalContenedor">
            <ItemList items={items}/>
        </div>
        );

}

export default ItemListContainer