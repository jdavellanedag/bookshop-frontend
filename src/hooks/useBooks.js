import {useEffect, useState} from "react";
import {fetchAllBooks} from "../utils/requestUtils";

export const useBooks = () => {

    const [books, setBooks] = useState([]);
    const [aggs, setAggs] = useState([])

    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los libros
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        const getData = async () => {
            const {books: data, aggs} = await fetchAllBooks();
            setBooks(data);
            setAggs(aggs);
        };
        getData();
    }, []);

    return {books, aggs, setAggs};
}