import { useState } from 'react'
import  './login.scss'

const Login = () => {

    //*Formularios LV-1
    const [email, setEmail ] = useState('')
    const[ password, setPassword] = useState()

    const capturarEmail = (e) =>{
            console.log(e.target.value)
            setEmail(e.target.value)
        }

    const capturarPass = (e) =>{
            console.log(e.target.value)
            setPassword(e.target.value)
        }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const datos = {
                email,
                password
        }
        console.log("Submit Del Formulario")
        console.log( datos )

    }



    return(
        <div className="formulario__Login">
            <form className="formulario__Login--objetos" onSubmit={handleSubmit}>
                <label className="LoginTitulo">LOGIN</label>
                <input 
                    className="email"
                    type={'email'}
                    value={email}
                    placeholder={'Ingresu su E-mail'}
                    onChange={capturarEmail}
                />
                <input
                    className="password"
                    placeholder={'Ingresu su Password'}
                    type={'password'}
                    value={password}
                    onChange={capturarPass}
                />
                <button
                    className="buttonSubmit" type="submit">INGRESAR</button>
            </form>
        </div>


    )

}

export default Login



