import {useEffect, useState} from "react";
import {getBooks} from "../utils/requestUtils";

export const useBooks = () => {

    const [books, setBooks] = useState([]);

    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los libros
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        const getData = async () => {
            const data = await getBooks();
            setBooks(data);
        };
        getData();
    }, []);

    return books;
}