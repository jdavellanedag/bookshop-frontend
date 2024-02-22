import {useContext, useEffect, useState} from "react";
import {LibraryContext} from "../context/LibraryContext";
import {useLocation} from "react-router";

export const useFilter = () => {

    const ENDPOINT = "http://localhost:8762/ms-library-books";
    const { books, setBusqueda } = useContext(LibraryContext);

    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search");

    const [filtBooks,setFiltBooks]  = useState([]);
    const [facetes, setFacetes] = useState([]);

    const dataToSend = {
        "targetMethod": "GET",
        "queryParams": {
            "search": [search]
        }
    };

    const fetchFacets = async () => {
        const getFacetesRequest = {
            "targetMethod": "GET",
            "queryParams": {
                "aggregate": [true]
            }
        }
        const response = await fetch(`${ENDPOINT}/books`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(getFacetesRequest)
        })
        const data = await response.json();
        setFacetes(data.aggs);
    }

    useEffect(() => {
        fetch(`${ENDPOINT}/books`, {
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
        if(search){
            setBusqueda(false);
        }else{
            setBusqueda(true);
        }
    }, [search]);

    useEffect( () => {
        fetchFacets()
    }, [search]);

    return {filtBooks, facetes}
}