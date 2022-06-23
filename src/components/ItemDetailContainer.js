//import { cargarProductos } from '../mock/cargarProductos';
import './itemdetailcontainer.scss';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { db } from './Firebase/Config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
   
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams() 
 

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((datproducts) => {

                setItem({ 
                    id: datproducts.id,
                    ...datproducts.data()
                })   
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



//   const id = Number(itemId)
//cargarProductos()
//.then((resp) =>{
//    setItem( resp.find((item) => item.id === id) )
//})
//.catch((error) =>{
//    console.log("Error reportado :" , error)
//})
//.finally(() =>{
//    setLoading(false)
//})