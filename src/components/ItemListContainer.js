import ItemCount from './ItemCount';
import './itemlistcontainer.css';
import onAdd from './onAdd.js'

const ItemListContainer = ({titulo , imagen, precio}) =>{

    return(
        <div className="contenedor">
            <div><h2 className="titulo">{titulo}</h2></div>
            <div>
                <img className="foto" src={imagen}></img>
            </div>
            <div>
                <h2 className="precio">$ {precio}</h2>
            </div>
            <ItemCount stock="9" initial="0" onAdd={onAdd}/>
        </div>
    );

}

export default ItemListContainer