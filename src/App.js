import './App.css';
import NavBar  from './components/NavBar';
import NavBarUser from './components/NavBarUser';
import Login from './components/Login';
import Team from './components/Team';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ups from './components/Ups';
import Spinner from './components/Spinner';
import Contactos from './components/Contactos';
import CartProvider from './context/CartContext';



function App() {
  return (
      <CartProvider>            
            <BrowserRouter>
                  <div className="App">
                        <header className="App-header">
                        </header>
                        <NavBarUser></NavBarUser>
                        <NavBar></NavBar>

                        <Routes>
                              <Route path='/' element={ <ItemListContainer/> }/>
                              <Route path='/genero/:generoId' element={ <ItemListContainer/> }/>
                              <Route path='/producto/:itemId' element={ <ItemDetailContainer/> }/>
                              <Route path='/login' element={ <Login/>} />
                              <Route path='/contacto' element={ <Contactos/>} />
                              <Route path='/team' element={ <Team/>} />
                              <Route path='*' element={ <Ups/>} />
                              <Route path='/spinner' element={ <Spinner/>} />
                        </Routes>

                        <Footer />

                  </div>
            </BrowserRouter>
      </CartProvider>
  );
}

export default App;
