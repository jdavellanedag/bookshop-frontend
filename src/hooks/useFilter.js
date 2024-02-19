import {useContext, useEffect, useState} from "react";
import {LibraryContext} from "../context/LibraryContext";
import {useLocation} from "react-router";

export const useFilter = () => {
    const { books, setBusqueda } = useContext(LibraryContext);

    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search");

    const [filtBooks,setFiltBooks]  = useState([]);

    const dataToSend = {
        "targetMethod": "GET",
        "queryParams": {
            "search": [search]
        }
    };

    useEffect(() => {
        if(search){
            setBusqueda(false);
            fetch('http://localhost:8762/ms-library-books/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
                .then((response) => response.json())
                .then((data) => {
                    setFiltBooks(data.books);
                    console.log(data.books); // Respuesta de la API después del POST
                });
        }else{
            setFiltBooks(books);
            setBusqueda(true);
        }
    });

    return filtBooks;
}