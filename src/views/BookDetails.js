import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {LibraryContext} from '../context/LibraryContext';
import "../styles/bookDetailsStyle.css"

const BookDetails = () => {
    const { bookId } = useParams();
    const { books, cartProduct, setCartProduct, rentBooks } = useContext(LibraryContext);
    const book = books.find(b => b.id === bookId);
    const onAddProduct = (book) => {
        const productExist = rentBooks.find((item) => item.id === book.id);
        const productRepeat = cartProduct.find((item) => item.id === book.id);
        if (productExist){
            window.alert(book.nombre + " ya está en la lista de alquilados");
        } else if(productRepeat) {
            window.alert(book.nombre + " ya está en la cesta");
        } else {
            setCartProduct([...cartProduct, book]);
        }
    }

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }

    return (
        <div className="book-details">
            <img className="portada" src={book.portada} alt={book.portada}/>
            <div className="details">
                <p><b>Título:</b> {book.nombre}</p>
                <p><b>Autor:</b> {book.autor}</p>
                <p><b>Sinopsis:</b> {book.sinopsis}</p>
                <p><b>Año de publicación:</b> {book.anoPublicacion}</p>
                <p><b>ISBN:</b> {book.isbn}</p>
                <p><b>Calificación:</b> {book.critica} / 5</p>
                <input type="button" value="Añadir al carrito" onClick={() => onAddProduct(book)}/>
            </div>
        </div>
    );
}

export default BookDetails;