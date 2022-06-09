import { Link } from 'react-router-dom'
//import ItemCount from "./ItemCount"
//import onAdd from './onAdd.js';



const Item = ({item}) => {
    return(
            <div className="contenedor">
               <div className="contenedor__titulo">
                   <h2 className="titulo" style={{textTransform: 'uppercase'}}>{item.titulo}</h2>
               </div>
               <div className="contenedor__foto">
                   <img className="foto" src={item.imagen}></img>
               </div>
               <div className="button">
                   <Link to={`/producto/${item.id}`}>
                        <input className="button_Detail" type="button" value="DETALLE"></input>
                    </Link>
               </div>
            </div>
    );

}

export default Item;


//               <div>
//                   <h2 className="precio">$ {item.precio}</h2>
//               </div>
//               <ItemCount stock={item.stock} initial="0" onAdd={onAdd}/>