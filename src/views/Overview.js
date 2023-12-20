import React, {useContext} from 'react';
import {Book} from "../components/Book";
import '../styles/overviewStyle.css';
import '../styles/styles.css';
import { FaSpinner } from "react-icons/fa";
import {Search} from "../components/Search";
import {useFilter} from "../hooks/useFilter";
import {LibraryContext} from "../context/LibraryContext";

export const Overview = () => {

    const { busqueda } = useContext(LibraryContext);
    const librosFilt = useFilter();

    return (
        librosFilt.length === 0  && busqueda === false? (
            <div className="libro-no-encontrado">
                <h3 > Libro no encontrado</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2RdnpLzKUrze1UjeadoFi7w0evwDjCTUwg&usqp=CAU" alt="Book not found"/>
            </div>
        ) : (
            librosFilt.length > 0 ? (
                <>
                    <Search />
                    <div className="book-container">
                        {
                            librosFilt.map((book, index) => (
                                <Book
                                    key={index}
                                    id={book.id}
                                    nombre={book.nombre}
                                    portada={book.portada}
                                />
                            ))
                        }
                    </div>
                </>
            ) : (
                <div className="faSpinner">
                    <FaSpinner id="spinner"/>
                </div>
            )
        )
    );
}