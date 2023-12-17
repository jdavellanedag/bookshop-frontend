import React from "react";
import { Link } from "react-router-dom";
import "../styles/bookStyle.css"

export const Book = ({ id, nombre, portada}) => {
    return (
        <div className="card">
            <h3>{nombre}</h3>
            <Link to={`/books/${id}`}>
                <img className="imagen" src={portada} alt={portada}/>
            </Link>
        </div>
    );
}