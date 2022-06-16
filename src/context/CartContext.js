import { createContext, useState } from "react";
import { cargarProductos } from "../mock/cargarProductos";



export const CartContext = createContext()



const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([])


    const addItem = (product) =>{

        setCart([...cart, product])

    }

    const isInCart = (id) =>{

        return cart.some( (producto) => producto.id === id) 

    }

    const removeItem = (id) =>{

        setCart( cart.filter((producto) => producto.id !== id) )

    }

    const clearCart = () =>{
        setCart( [] )

    }    

        return(
                <CartContext.Provider value={{ addItem, isInCart, cart, removeItem, clearCart}}>



                        {children}



                </CartContext.Provider>
        )

}

export default CartProvider





