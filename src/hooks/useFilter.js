import {useContext, useEffect, useState} from "react";
import {LibraryContext} from "../context/LibraryContext";
import {useLocation} from "react-router";
import {getBooks} from "../utils/requestUtils";

export const useFilter = () => {

    const { setBusqueda, activeFacet } = useContext(LibraryContext);

    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search");

    const [filtBooks,setFiltBooks]  = useState([]);

    const getData = async (search, facets) => {
        const data = await getBooks(search, facets);
        setFiltBooks(data);
    };

    useEffect(() => {
        getData(search, activeFacet);
        if(search){
            setBusqueda(false);
        }else{
            setBusqueda(true);
        }
    }, [search, activeFacet]);

    return {filtBooks}
}