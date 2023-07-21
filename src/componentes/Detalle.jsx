import React from "react";
import { useLocation } from "react-router-dom";
import './Detalle.css';

const Detalle = () => {
    const location = useLocation();
    const personaje = location.state.personaje;
    return (
        <div className="detalle">
            <div className="caja">
                <h1>DETALLE</h1>
                <div className="contenido">
                    <img src={personaje.image} alt="Foto de personaje" />
                    <table>
                        <tr>
                            <td><h3>Nombre:</h3></td>
                            <td><p>{personaje.name}</p></td>
                        </tr>
                        <tr>
                            <td><h5>Estado:</h5></td>
                            <td><p>{personaje.status}</p></td>
                        </tr>
                        <tr>
                            <td><h5>Especie:</h5></td>
                            <td><p>{personaje.species}</p></td>
                        </tr>
                        <tr>
                            <td><h5>Tipo:</h5></td>
                            <td><p>{personaje.type}</p></td>
                        </tr>
                        <tr>
                            <td><h5>Género:</h5></td>
                            <td><p>{personaje.gender}</p></td>
                        </tr>
                        <tr>
                            <td><h5>Origen:</h5></td>
                            <td><p>{personaje.origin.name}</p></td>
                        </tr>
                        <tr>
                            <td><h5>Ubicación:</h5></td>
                            <td><p>{personaje.location.name}</p></td>
                        </tr>
                        <tr>
                            <td><h5>Episodios:</h5></td>
                            <td><p>{personaje.episode.length}</p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detalle;