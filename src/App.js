import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import TareasPage from './pages/TareasPage';
import CrearTareaPage from './pages/CrearTareaPage';
import TareaDetallePage from './components/TareaDetallePage';
import './components/App.css';  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tareas' element={<TareasPage />} />
          <Route path='/crear-tarea' element={<CrearTareaPage />} />
          <Route path='/tarea/:id' element={<TareaDetallePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
