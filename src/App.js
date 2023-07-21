import './App.css';
import Acceso from './componentes/Acceso';
import { useEffect, useState } from 'react';
import RickandMorty from './componentes/RickandMorty';
import Detalle from './componentes/Detalle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RutaPrivada from './componentes/RutaPrivada';


function App() {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = "UnUser";
    const password = "ContrasenaSegura123";
    let usuario = localStorage.getItem("user");
    let pass = localStorage.getItem("password");
    if (usuario === user && pass === password) {
      logUser();
    }
  }, []);

  const logUser = () => {
      setLogged(true)
      navigate('/lista');
  }

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
