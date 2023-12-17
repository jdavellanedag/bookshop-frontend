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
    console.log(search);

    if(search === null || search === ""){
        librosFilt = books;
        noHayBusqueda = true;
        console.log(noHayBusqueda);
    }else{
        librosFilt = books.filter(b => {
            noHayBusqueda = false;
            console.log(noHayBusqueda);
            let result = "";
            let nombre = "";
            let autor = "";
            let isbn = "";
            let anoPublicacion = "";
            if (search){
                result = search.trim().toLowerCase();
            }
            if(b.nombre){
                nombre =  b.nombre.trim().toLowerCase();
            }
            if(b.autor){
                autor = b.autor.trim().toLowerCase();
            }
            if(b.isbn){
                isbn = b.isbn.toString().trim();
            }
            if(b.anoPublicacion){
                anoPublicacion = b.anoPublicacion.toString().trim();
            }
            return nombre.includes(result) || autor.includes(result) ||  isbn.startsWith(result) || anoPublicacion === result;
        });

    }


    return (
        <div>
            <Search />
            <div className="book-container">
                {
                    librosFilt.length === 0 && noHayBusqueda === false ? (
                        <h3 className="libro-no-encontrado"> Libro no encontrado</h3>
                    ) : (
                        librosFilt.length > 0 ? (
                            librosFilt.map((book, index) => (
                                <Book
                                    key={index}
                                    id={book.id}
                                    nombre={book.nombre}
                                    portada={book.portada}
                                />
                            ))
                        ) : (
                            <FaSpinner id="spinner"/>
                        )
                    )
                }
            </div>
        </div>
    );
}