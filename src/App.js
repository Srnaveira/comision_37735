import NavBar  from './components/NavBar';
import NavBarUser from './components/NavBarUser';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <NavBarUser></NavBarUser>
        <NavBar></NavBar>
        <ItemListContainer titulo="EL NOMBRE DEL VIENTO" imagen="https://www.popularlibros.com/imagenes.webp/9788401/978840133720.webp" precio="5249.00" />
    </div>
  );
}

export default App;
