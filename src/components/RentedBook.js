import React from "react";


export const RentedBook = ({ nombre, portada, diasPrestamo}) => {
    return (
        <div className="libros-alquilados">
            <img src={portada} alt={portada}/>
            <h3>Nombre : {nombre}</h3>
            <p>{diasPrestamo}</p>
        </div>
    );
}