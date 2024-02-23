import {Book} from "./Book";
export const Catalogue = ({books}) => {

    return (
        <div className="book-container">
            {
                books.map((book, index) => (
                    <Book
                        key={index}
                        id={book.id}
                        nombre={book.nombre}
                        portada={book.portada}
                    />
                ))
            }
        </div>
    )
}