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



function App() {
  return (
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
                      <Route path='/team' element={ <Team/>} />
                      <Route path='*' element={ <Ups/>} />
                </Routes>

                <Footer />

          </div>
    </BrowserRouter>
  );
}

export default App;
