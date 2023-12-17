import {LibraryContext} from "../context/LibraryContext";
import React, {useContext} from "react";
import {RentedBook} from "../components/RentedBook";

export const RentedBooks = () => {
    const { rentBooks } = useContext(LibraryContext);

    return (
        <div>
            {
                rentBooks.map((book, index) => (
                    <RentedBook
                        key={index}
                        nombre={book.nombre}
                        portada={book.portada}
                        diasPrestamo= "30"
                    />
                ))
            }
        </div>
    );
}