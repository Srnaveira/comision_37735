import './itemcount.scss';

const ItemCount = ({ stock, initial, counter ,setCounter, onAdd }) =>{

   

    const sum = () => {
        if(counter < stock){
            setCounter(counter + 1)
        } else{

        }
         
    }

    const rest =() =>{
        if(counter > Number(initial)){
            setCounter(counter - 1)
        } else {

        }
    }
    
    return(
            <>
                <div className="contador">
                    <div className="contador__div">
                        <input type="button" className="contador__div__rest" onClick={rest} value="-"/>        
                        <spam className="contador__div__number">{counter}</spam>
                        <input type="button" className="contador__div__sum" onClick={sum} value="+"/> 
                    </div>
                    <input className="contador__button" type="button" value="AGREGAR AL CARRITO" onClick={ onAdd }></input>
                </div>
            </>
    );

}

export default ItemCount;
