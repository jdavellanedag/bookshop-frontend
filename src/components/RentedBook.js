import React, {useContext} from "react";
import {CiCirclePlus} from "react-icons/ci";
import { MdAssignmentReturn } from "react-icons/md";
import {LibraryContext} from "../context/LibraryContext";
import {returnABook} from "../utils/requestUtils";

export const RentedBook = ({id, nombre, portada, diasPrestamo, libro}) => {
    const { rentBooks, setRentBooks } = useContext(LibraryContext);
    const addDays =() => {
        const libroEnc = rentBooks.find((item) => item.id === id);
        if(libroEnc){
            setRentBooks(rentBooks.map((item) => (item.id === id ? {...libro, diasPrestamo : diasPrestamo + 1} : item)));
        }
    }

    const handleOnClick = () => {
        returnABook(id);
        setRentBooks( books => books.filter(book => book.id !== id))
    }

    return (
        <div className="libros-alquilados">
            <img src={portada} alt={portada}/>
            <h3>{nombre}</h3>
            <p className="periodo-prestamo">Periodo prestamo: {diasPrestamo} días</p>
            <CiCirclePlus className="add-button" onClick={() => addDays()}/>
            <MdAssignmentReturn onClick={handleOnClick} className="return-book_icon"/>
        </div>
    );
}