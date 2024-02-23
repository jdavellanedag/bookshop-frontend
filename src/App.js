import GlobalRouter from "./routes/GlobalRouter";
import {LibraryContext} from "./context/LibraryContext";
import {Footer} from "./components/Footer";
import {useBooks} from "./hooks/useBooks";
import {useEffect, useState} from "react";
import { getFacets} from "./utils/requestUtils";

function App() {

    const [activeFacet, setActiveFacet] = useState({})

    const [facetsData, setFacetsData] = useState([])

    useEffect(() => {
        getFacets()
            .then((data) => setFacetsData(data))
    }, []);

    const updateFacets = (facet) => {
        setActiveFacet(facet);
    }


    const books = useBooks();
    const [cartProduct, setCartProduct] = useState([]);
    const [rentBooks, setRentBooks] = useState([]);
    const [busqueda, setBusqueda] = useState(true);

    return (
      <LibraryContext.Provider value={{books, cartProduct, setCartProduct, rentBooks, setRentBooks, busqueda, setBusqueda, updateFacets, facetsData, activeFacet}}>
        <GlobalRouter></GlobalRouter>
        <Footer />
      </LibraryContext.Provider>
    );
}

export default App;
