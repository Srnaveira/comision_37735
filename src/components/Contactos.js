import { useState } from 'react'

const Contactos = () =>{

    const [values, setValues] =useState({
        nombre: '',
        email: '',
        text: ''
    })

    const handledSubmit = (e) =>{
        e.preventDefault()
        console.log(values)
    }

    const capturarValues =(e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
         })
    }

    return(

        <div>
            <form onSubmit={handledSubmit}>
                <input
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    type={'text'}
                    value={values.nombre}
                    onChange={capturarValues}
                />
                <input
                    name="email"
                    placeholder="Ingrese su e-mail"
                    type={'text'}
                    value={values.email}
                    onChange={capturarValues}
                />
                <textarea 
                    name="text"
                    placeholder='Escriba su mensaje'
                    cols="90" 
                    rows="10"
                    value={values.text}
                    onChange={capturarValues}
                />
                <button>Enviar</button>    
            </form>

        </div>
    )
}

export default Contactos