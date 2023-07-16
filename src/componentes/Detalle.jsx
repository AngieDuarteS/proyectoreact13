import React from "react";
import { useLocation } from "react-router-dom";

const Detalle = () => {
    const location = useLocation();
    console.log(location);
    const personaje = location.state.personaje;
    return (
        <div>
            <img src={personaje.image} alt="Foto de personaje" />
            <table>
                <tr>
                    <td><h3>Nombre:</h3></td>
                    <td><p>{personaje.name}</p></td>
                </tr>
                <tr>
                    <td><h5>Estado:</h5></td>
                    <td>{personaje.status}</td>
                </tr>
                <tr>
                    <td><h5>Especie:</h5></td>
                    <td>{personaje.species}</td>
                </tr>
                <tr>
                    <td><h5>Tipo:</h5></td>
                    <td>{personaje.type}</td>
                </tr>
                <tr>
                    <td><h5>Género:</h5></td>
                    <td>{personaje.gender}</td>
                </tr>
                <tr>
                    <td><h5>Origen:</h5></td>
                    <td>{personaje.origin.name}</td>
                </tr>
                <tr>
                    <td><h5>Ubicación:</h5></td>
                    <td>{personaje.location.name}</td>
                </tr>
                <tr>
                    <td><h5>Episodios:</h5></td>
                    <td>{personaje.episode.length}</td>
                </tr>
            </table>
        </div>
    )
}

export default Detalle;