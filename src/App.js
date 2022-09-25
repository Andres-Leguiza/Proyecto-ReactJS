import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer bienvenida={'Bienvenidos!'}/>
    </div>
  );
}

export default App;
