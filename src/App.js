import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Practico en clase "CLASE-00"</h2>
        <p class="Parrafo-PC">Crea un formulario de contacto utilizando HTML5, CSS y añade Js para simular su funcionamiento</p>
        <div class="container__fields">
        <label class="App-label">Ingrese su nombre</label>
        <input type="text" class="App-inputs" required/>
        </div>
        <div class="container__fields">
        <label class="App-label">Ingrese su Mail</label>
        <input type="mail" class="App-inputs" required/>
        </div>
        <div class="container__fields">
        <input type="submit" class="App-buttom" value="Enviar"/>       
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo ReactJS
        </a>
      </header>
    </div>
  );
}

export default App;
