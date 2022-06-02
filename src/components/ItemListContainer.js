import { useEffect, useState } from 'react';
import { cargarProductos } from '../mock/cargarProductos';
import ItemList from './ItemList';
import './itemlistcontainer.css';


const ItemListContainer = () =>{

    const [items, setItems] = useState([])
  

    useEffect(() => {
        cargarProductos()
            .then((resp) => {
                setItems(resp)
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    },)

    return(
        <div className="principalContenedor">
            <ItemList items={items}/>
        </div>
        );

}

export default ItemListContainer