import React, { useState } from "react";
import Detalle from "./Detalle"
import { useNavigate } from "react-router-dom";

const Lista = ({personajes = [], setFiltroSeleccionado, filtroSeleccionado}) => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
    const [filtro, setFiltro] = useState(filtroSeleccionado);

    const navigate = useNavigate();

    const handleClick = (event, item) => {
        console.log(item);
        event.preventDefault();
        setMostrarDetalle(!mostrarDetalle);
        setPersonajeSeleccionado(item);
        navigate('/detalle', { state: {personaje: item}});

    }

    const handleFilterSelect = (event) => {
        event.preventDefault();
        setFiltro(event.target.value);
    }

    const handleFilterClick = (event) => {
        event.preventDefault();
        setFiltroSeleccionado(filtro);
    }
    
    return (
        <>
        <div>
            <legend htmlFor="filtar" className="filtro">Estado</legend>
            <select name="filtar" value={filtro}  onChange={handleFilterSelect}>
                <option value="all">Todos</option>
                <option value="alive">Vivo</option>
                <option value="dead">Muerto</option>
                <option value="unknown">Desconocido</option>
            </select>
        <input type="submit" name="filtrar" value="Filtrar" onClick={handleFilterClick}/>


            {personajes.map((item, index) => (
                    <div key={index} onClick={(event) => handleClick(event, item)} className="">
                        <img src= {item.image} alt="Foto de personaje" />
                        <h3>{item.name}</h3>
                        <h6>Estado: {item.status}</h6>
                    </div>
                ))}
        </div>
     </>
    )
}

export default Lista;
 



//const [data, setData] = useState (null);
//fetch ("https://rickandmortyapi.com/api/character")
//.then(response => response.json())
//.then((personaje) => setData(personaje))
//.catch(error => console.log(error))