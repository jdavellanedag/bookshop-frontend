import GlobalRouter from "./routes/GlobalRouter";
import {LibraryContext} from "./context/LibraryContext";
import {Footer} from "./components/Footer";
import {useBooks} from "./hooks/useBooks";
import {useEffect, useState} from "react";

function App() {

    const [activeFacet, setActiveFacet] = useState({})

    const {books, aggs, setAggs} = useBooks();
    const [cartProduct, setCartProduct] = useState([]);
    const [rentBooks, setRentBooks] = useState([]);
    const [busqueda, setBusqueda] = useState(true);

    return (
      <LibraryContext.Provider value={{books, cartProduct, setCartProduct, rentBooks, setRentBooks, busqueda, setBusqueda, setActiveFacet, setAggs, aggs, activeFacet}}>
        <GlobalRouter></GlobalRouter>
        <Footer />
      </LibraryContext.Provider>
    );
}

export default App;
