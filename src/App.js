import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/item/:productoId' element={ <ItemDetailContainer />}/>
          <Route path='*' element={<h1 className="d-flex justify-content-center">404 PAGINA NO ENCONTRADA</h1>} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
