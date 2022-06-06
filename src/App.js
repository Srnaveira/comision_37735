import NavBar  from './components/NavBar';
import NavBarUser from './components/NavBarUser';
//import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBarUser></NavBarUser>
      <NavBar></NavBar>
        <ItemDetailContainer numero='5'></ItemDetailContainer>
    </div>
  );
}

export default App;


    
//<ItemListContainer></ItemListContainer>