import GlobalRouter from "./routes/GlobalRouter";
import {LibraryContext} from "./context/LibraryContext";
import {Footer} from "./components/Footer";
import {useBooks} from "./hooks/useBooks";
import {useState} from "react";

function App() {

  const books = useBooks();
  const [cartProduct, setCartProduct] = useState([]);
  const [rentBooks, setRentBooks] = useState([]);

  return (
      <LibraryContext.Provider value={{books, cartProduct, setCartProduct, rentBooks, setRentBooks}}>
        <GlobalRouter></GlobalRouter>
        <Footer />
      </LibraryContext.Provider>
  );
}

export default App;
