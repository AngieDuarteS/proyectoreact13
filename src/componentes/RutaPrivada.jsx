import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaPrivada = ({logged, children}) => {
    if(!logged) {
        return(
            <Navigate to="/acceso" replace />
        );
    }
    return (children);
};

export default RutaPrivada;