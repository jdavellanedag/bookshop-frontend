import {useContext, useEffect, useState} from "react";
import {LibraryContext} from "../context/LibraryContext";
import {useLocation} from "react-router";

export const useFilter = () => {
    const { books, setBusqueda } = useContext(LibraryContext);

    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search");

    const [filtBooks,setFiltBooks]  = useState([]);

    useEffect(() => {
        if(search){
            setBusqueda(false);
            setFiltBooks(books.filter(b => {
                const result = search.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const nombre = b.nombre.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const autor = b.autor.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const isbn = b.isbn.toString().trim();
                const anoPublicacion = b.anoPublicacion.toString().trim();
                const idioma = b.idioma.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                return nombre.includes(result) || autor.includes(result) || isbn.startsWith(result) || anoPublicacion === result || idioma === result;
            }));
        }else{
            setFiltBooks(books);
            setBusqueda(true);
        }
    });

    return filtBooks;
}