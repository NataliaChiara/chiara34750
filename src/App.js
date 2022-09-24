import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header';
import Main from './components/Main/main';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting={'Hola!'}/> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
