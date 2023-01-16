import './App.css';
import TotalUsuarios from './assets/components/TotalUsuarios'
import TotalProductos from './assets/components/TotalProductos'
import TotalCategorias from './assets/components/TotalCategorias';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard DogHouse</h1>
        <TotalUsuarios></TotalUsuarios>
        <br></br>
        <TotalProductos></TotalProductos>
        <br></br>
        <TotalCategorias></TotalCategorias>
      </header>
    </div>
  );
}

export default App;
