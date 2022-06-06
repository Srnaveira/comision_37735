import {useState} from "react"
import './itemcount.scss';

const ItemCount = ({stock, initial, onAdd}) =>{

    let [number, setNumber] = useState(parseInt(initial))

    const sum = () => {
        if(number < stock){
            setNumber(number + 1)
        } else{}
         
    }

    const rest =() =>{
        if(number > initial){
            setNumber(number - 1)
        } else {}
    }
    
    return(
            <>
                <div className="contador">
                    <div className="contador__div">
                        <input type="button" className="contador__div__rest" onClick={rest} value="-"/>        
                        <spam className="contador__div__number">{number}</spam>
                        <input type="button" className="contador__div__sum" onClick={sum} value="+"/> 
                    </div>
                    <input className="contador__button" type="button" value="AGREGAR AL CARRITO" onClick={() => onAdd(number)}></input>
                </div>
            </>
    );

}

export default ItemCount;
