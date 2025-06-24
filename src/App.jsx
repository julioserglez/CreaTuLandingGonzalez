import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const contenido = 'Lista de productos';

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer saludo = {"Bienvenidos a mi e-commerce"}/>
      <h2>{contenido}</h2>
    </div>
  )
}

export default App
