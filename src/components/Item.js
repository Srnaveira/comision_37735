import ItemCount from "./ItemCount"
import onAdd from './onAdd.js';

const Item = ({item}) => {
    return(
            <div className="contenedor">
               <div><h2 className="titulo">{item.titulo}</h2></div>
               <div>
                   <img className="foto" src={item.imagen}></img>
               </div>
               <div>
                   <h2 className="precio">$ {item.precio}</h2>
               </div>
               <ItemCount stock={item.stock} initial="0" onAdd={onAdd}/>
            </div>

    );

}

export default Item;