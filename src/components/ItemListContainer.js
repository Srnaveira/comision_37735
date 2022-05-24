import './itemlistcontainer.css';

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
        </div>
    );

}

export default ItemListContainer