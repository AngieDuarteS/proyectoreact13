import './App.css';
import Acceso from './componentes/Acceso';
import { useState } from 'react';
import RickandMorty from './componentes/RickandMorty';
import Detalle from './componentes/Detalle';
import { Route, Routes } from 'react-router-dom';
import RutaPrivada from './componentes/RutaPrivada';


function App() {
  const [logged, setLogged] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Acceso setLogIn={setLogged} />} />
        <Route path='/acceso' element={<Acceso setLogIn={setLogged} />} />
        <Route path='/lista' element={<RutaPrivada logged={logged}><RickandMorty /></RutaPrivada>} />
        <Route path='/detalle' element={<RutaPrivada logged={logged}><Detalle /></RutaPrivada>} />
      </Routes>
    </div>
  );
}
export default App;

/**/

/*
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;

<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/
