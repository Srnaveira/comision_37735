import './cardbutton.scss'

const CardButton = () =>{


    return(
        <div className="contenedor__carrito">
            <div className="contenedor__carrito__info">
              <span className="contenedor__carrito__info--cantidad">8 Items</span>
              <span className="contenedor__carrito__info--total">Subtotal: $999</span>
              <div className="contenedor__carrito__accion">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
        </div>
    )

}

export default CardButton