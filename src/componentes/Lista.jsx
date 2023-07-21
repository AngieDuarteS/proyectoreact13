import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Lista.css';

const Lista = ({ personajes = [], setFiltroSeleccionado, filtroSeleccionado }) => {
    const [filtro, setFiltro] = useState(filtroSeleccionado);

    const navigate = useNavigate();

    const handleClick = (event, item) => {
        event.preventDefault();
        navigate('/detalle', { state: { personaje: item } });

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
            <div className="lista">
                <div className="filtro">
                    <legend htmlFor="estado">Filtrar por estado</legend>
                    <select className="opciones" value={filtro} onChange={handleFilterSelect}>
                        <option value="all">Todos</option>
                        <option value="alive">Vivo</option>
                        <option value="dead">Muerto</option>
                        <option value="unknown">Desconocido</option>
                    </select>
                <input type="submit" name="filtrar" id= "filtrar" value="Filtrar" onClick={handleFilterClick} />
                </div>
                <div className="personajes">
                  {personajes.map((item, index) => (
                    <div key={index} onClick={(event) => handleClick(event, item)} className="personaje">
                        <img src={item.image} alt="Foto de personaje" />
                        <h3>{item.name}</h3>
                        <h6>Estado: {item.status}</h6>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default Lista;
