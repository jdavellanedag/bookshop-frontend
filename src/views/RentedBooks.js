import {LibraryContext} from "../context/LibraryContext";
import React, {useContext} from "react";
import {RentedBook} from "../components/RentedBook";
import "../styles/rentedBooksStyle.css"

export const RentedBooks = () => {
    const { rentBooks } = useContext(LibraryContext);

    return (
        rentBooks.length > 0 ? (
            <>
                <h2> Libros alquilados</h2>
                <div className="rented-books-container">
                    {
                        rentBooks.map((book, index) => (
                            <RentedBook
                                key={index}
                                id={book.id}
                                nombre={book.nombre}
                                portada={book.portada}
                                diasPrestamo={book.diasPrestamo}
                                libro = {book}
                            />
                        ))
                    }
                </div>
            </>
            ) : (
                <h2>No hay ningún libro alquilado</h2>
            )
    );
}
