import {useEffect, useState} from "react";

export const useBooks = () => {

    const [books, setBooks] = useState([]);

    const dataToSend = {
        "targetMethod": "GET"
    };

    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los libros
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8762/ms-library-books/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
                .then((response) => response.json())
                .then((data) => {
                    setBooks(data.books);
                    console.log(data.books); // Respuesta de la API después del POST
                });
        }, 2500);
    }, []);

    return books;
}