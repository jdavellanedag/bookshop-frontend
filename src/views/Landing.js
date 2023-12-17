import React from 'react';
import {Link} from "react-router-dom";
import useRedirection from "../hooks/useRedirection";
import "../styles/landingStyle.css"

function Landing() {

    useRedirection("/books", 3000); // Redireccionamos a la vista de la libreria en 3 segundos

    return (
        <div className="landing">
            <Link className="enlace-landing" to={"/books"}> {/* Añadimos un enlace a la vista de los libros */}
                <h1>Bienvenidos a La librería de Ohara</h1>
            </Link>
        </div>
    );
}

export default Landing;

