import React, {useContext} from "react";
import {CiCirclePlus} from "react-icons/ci";
import {LibraryContext} from "../context/LibraryContext";
import {useNavigate} from "react-router";

export const RentedBook = ({id, nombre, portada, diasPrestamo, libro}) => {
    const { rentBooks, setRentBooks } = useContext(LibraryContext);
    const navigate = useNavigate();
    const addDays =() => {
        const libroEnc = rentBooks.find((item) => item.id === id);
        if(libroEnc){
            setRentBooks(rentBooks.map((item) => (item.id === id ? {...libro, diasPrestamo : diasPrestamo + 1} : item)));
        }
    }

    return (
        <div className="libros-alquilados">
            <img src={portada} alt={portada}/>
            <h3>{nombre}</h3>
            <p className="periodo-prestamo">Periodo prestamo: {diasPrestamo} días</p>
            <CiCirclePlus className="add-button" onClick={() => addDays()}/>
        </div>
    );
}