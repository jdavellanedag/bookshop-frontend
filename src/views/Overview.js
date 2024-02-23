import React, {useContext, useState} from 'react';
import {Book} from "../components/Book";
import '../styles/overviewStyle.css';
import '../styles/styles.css';
import { FaSpinner } from "react-icons/fa";
import {Search} from "../components/Search";
import {useFilter} from "../hooks/useFilter";
import {LibraryContext} from "../context/LibraryContext";
import {Catalogue} from "../components/Catalogue";
import {Facet} from "../components/Facet";

export const Overview = () => {

    const { busqueda, facetsData } = useContext(LibraryContext);
    const {filtBooks} = useFilter();

    const [filters, setFilters] = useState([]);

    const addOrRemove = (value, list) => ( list.includes(value) ? list.filter(item => item !== value) : [...list, value]);

    const handleOnChange = (value) => {
        setFilters( current => addOrRemove(value, current));
        console.log(filters)
    }

    return (
        <>
            <Search />
            <div className="book-catalogue">
                <div className="book-catalogue_facets">
                    {
                        facetsData && (
                            facetsData.map((element) => (
                                <Facet key={element.key} facet={element}/>
                            ))
                        )
                    }
                </div>
                <div>
                {
                    !filtBooks  && busqueda === false? (
                    <div className="libro-no-encontrado">
                        <h3 > Libro no encontrado</h3>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2RdnpLzKUrze1UjeadoFi7w0evwDjCTUwg&usqp=CAU" alt="Book not found"/>
                    </div>
                    ) : (
                        filtBooks ? (
                            <Catalogue books={filtBooks}/>
                        ) : (
                            <div className="faSpinner">
                                <FaSpinner id="spinner"/>
                            </div>
                        )
                    )
                }
                </div>
            </div>
        </>
    );
}