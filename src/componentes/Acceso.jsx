import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import './Acceso.css';

const Acceso = ({ setLogIn }) => {
    const user = "UnUser";
    const password = "ContrasenaSegura123";

    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("loging")
        if (usuario === user && pass === password) {
            setLogIn(true)
            navigate('/lista');
        }
    }
    return (
        <div className="acceso">
            <h1>Personajes Rick and Morty</h1>
            <form onSubmit={handleSubmit} method="POST">
                <div>
                    <label htmlFor="Usuario">Usuario</label>
                    <input type="text" placeholder="Escribe tu usuario" name="usuario" id="Usuario" required="required" value={usuario} onChange={e => setUsuario(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Contraseña">Contraseña</label>
                    <input type="password" placeholder="Escribe tu contraseña" name="contraseña" id="Contraseña" required="required" value={pass} onChange={e => setPass(e.target.value)} />
                </div>

                <input type="submit" name="Entrar" id="Entrar" value="Entrar" />
            </form>
        </div>
    )
}

export default Acceso;