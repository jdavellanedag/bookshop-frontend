import {useContext, useEffect, useState} from "react";
import {LibraryContext} from "../context/LibraryContext";
import {useLocation} from "react-router";
import {fetchBooks} from "../utils/requestUtils";

export const useFilter = () => {

    const { setBusqueda, activeFacet, setAggs } = useContext(LibraryContext);

    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search");

    const [filtBooks,setFiltBooks]  = useState([]);

    const getData = async (search, filter) => {
        const {books: data, aggs } = await fetchBooks(search, filter);
        //const data = await getBooks(search, facets);
        setFiltBooks(data);
        setAggs(aggs);
    };

    const filterData = async (language) => {
        const {books: data} = await fetchBooks(search);
        if (language) {
            const filteredBooks = data.filter(book => book.language === language);
            setFiltBooks(filteredBooks) ;
        } else {
            setFiltBooks(data);
        }
    }

    useEffect(() => {
        filterData(activeFacet.languaje)
    }, [activeFacet]);

    useEffect(() => {
        getData(search, activeFacet);
        if(search){
            setBusqueda(false);
        }else{
            setBusqueda(true);
        }
    }, [search]);

    return {filtBooks, filterData}
}