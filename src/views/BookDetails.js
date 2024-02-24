import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {LibraryContext} from '../context/LibraryContext';
import "../styles/bookDetailsStyle.css"

const BookDetails = () => {
    const { bookId } = useParams();
    const { books, cartProduct, setCartProduct, rentBooks } = useContext(LibraryContext);
    const [book, setBook] = useState({})
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
    useEffect(() => {
        setBook(books.find(b => b.id === bookId));
    }, []);



    return (
        <div className="book-details">
            <img className="portada" src={book.image} alt={book.image}/>
            <div className="details">
                <p><b>Título:</b> {book.name}</p>
                <p><b>Autor:</b> {book.author}</p>
                {/*<p><b>Sinopsis:</b> {book.sinopsis}</p>*/}
                <p><b>Año de publicación:</b> {book.releaseYear}</p>
                <p><b>Idioma:</b> {book.language}</p>
                <p><b>ISBN:</b> {book.isbn}</p>
                <p><b>Calificación:</b> {book.rate} / 5</p>
                <input type="button" value="Añadir a la cesta" onClick={() => onAddProduct(book)}/>
            </div>
        </div>
    );
}

export default BookDetails;