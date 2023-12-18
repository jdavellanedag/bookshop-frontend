import React, {useContext} from 'react';
import {Book} from "../components/Book";
import {LibraryContext} from "../context/LibraryContext";
import '../styles/overviewStyle.css';
import '../styles/styles.css';
import { FaSpinner } from "react-icons/fa";
import {Search} from "../components/Search";
import {useQuery} from "../hooks/useQuery";

export const Overview = () => {

    const { books } = useContext(LibraryContext);
    const query = useQuery();
    const search = query.get("search");
    let librosFilt = [];
    let noHayBusqueda= true;

    if(search === null || search === ""){
        librosFilt = books;
        noHayBusqueda = true;
    }else{
        librosFilt = books.filter(b => {
            noHayBusqueda = false;
            let result = "";
            let nombre = "";
            let autor = "";
            let isbn = "";
            let anoPublicacion = "";
            let idioma = "";
            if (search){
                result = search.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            if(b.nombre){
                nombre =  b.nombre.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            if(b.autor){
                autor = b.autor.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            if(b.isbn){
                isbn = b.isbn.toString().trim();
            }
            if(b.anoPublicacion){
                anoPublicacion = b.anoPublicacion.toString().trim();
            }
            if(b.idioma){
                idioma = b.idioma.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            return nombre.includes(result) || autor.includes(result) ||  isbn.startsWith(result) || anoPublicacion === result || idioma === result;
        });

    }


    return (
        librosFilt.length === 0 && noHayBusqueda === false ? (
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