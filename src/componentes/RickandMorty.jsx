import {useEffect, useState} from "react";
import Lista from "./Lista";
import Detalle from "./Detalle"


function RickandMorty () {
const [isLoading, setIsLoading] = useState(true);
const [personajes, setPersonajes] = useState (null);
const [filtroSeleccionado, setFiltroSeleccionado] = useState("all");

useEffect (() => {
    setIsLoading(true);
    fetch (getUrlToFetch())
    .then(response => response.json())
    .then((data) => {
        setPersonajes(data.results);
        setIsLoading(false);
    });
        
   
}, [filtroSeleccionado]);

function getUrlToFetch() {
    if(filtroSeleccionado === "all") {
        return "https://rickandmortyapi.com/api/character";
    }
    return `https://rickandmortyapi.com/api/character/?status=${filtroSeleccionado}`;
}

if (isLoading) {
   return (
    <div>
        <h1>Cargando...</h1>
    </div>
); 
}

return (
    <div>
        <Lista personajes={personajes} setFiltroSeleccionado={setFiltroSeleccionado}  filtroSeleccionado={filtroSeleccionado}/>
    </div>
);
}
export default RickandMorty;