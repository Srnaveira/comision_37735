//import { cargarProductos } from '../mock/cargarProductos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './itemlistcontainer.css';
import Spinner from './Spinner';
import {db} from './Firebase/Config'
import { collection,  getDocs } from 'firebase/firestore';


const ItemListContainer = () =>{

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { generoId } = useParams()
    

    useEffect(() => {
        setLoading(true)
        const collator = new Intl.Collator('en')
        const productosRef = collection(db, "productos")

        getDocs(productosRef)

  
          .then((datproducts) => {
                if (!generoId) {
                       const productos =  datproducts.docs.map((doc) => {
                           return{       
                              id: doc.id,
                              ...doc.data()
                           }
                      })
                   
                      const ordenar = (x, y) =>{
                          return collator.compare(x.titulo, y.titulo)
                      }
                   
                      setItems(productos.sort(ordenar))

                } else {
                        const productos =  datproducts.docs.map((doc) => {
                            return{       
                               id: doc.id,
                               ...doc.data()
                            }
                        })

                        setItems( productos.filter((product) => product.genero.toUpperCase() === generoId ))
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


//useEffect(() => {
//    setLoading(true)
//    cargarProductos()
//        .then((resp) => {
//           if (!generoId) {
//                setItems(resp)
//
//           } else {
//                setItems( resp.filter( (item) => item.genero.toUpperCase() === generoId ) )
//           } 
//                      
//        })
//        .catch((error) => {
//            console.log('ERROR', error)
//        })
//        .finally(() =>{
//            setLoading(false)
//        })
//}, [generoId])