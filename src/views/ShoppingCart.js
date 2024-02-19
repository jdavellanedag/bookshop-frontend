import CartElements from "../components/CartElements";
import React, {useContext} from "react";
import {LibraryContext} from "../context/LibraryContext";
import "../styles/shoppingCartStyle.css"
import {useNavigate} from "react-router";
const ShoppingCart = () => {
    const { cartProduct, setRentBooks, setCartProduct } = useContext(LibraryContext);
    const navigate = useNavigate();
    const dataToSend = {
        "targetMethod": "PATCH",
        "body": {
            "disponible":false
        }
    };

    const addLibrosAlquilados = () => {
        cartProduct.forEach(cp => {
            const newBook= {id:cp.id, nombre: cp.nombre, portada: cp.portada, diasPrestamo : 30};
            setRentBooks(b => [...b, newBook])
            fetch('http://localhost:8762/ms-library-books/books/' + cp.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
                .then((response) => response.json())
                .then((data) => {});
        });
        setCartProduct([]);
        navigate("/rentedBooks");
    }

    return cartProduct.length > 0 ? (
        <div className="elementos-carrito">
            <h2 className="titulo-carrito">Carrito de libros</h2>
            <CartElements />
            <input className="boton-tramitar-alquiler" type="button" value="Alquilar" onClick={() => addLibrosAlquilados()}/>
        </div>
    ) : (
        <h2 className="carritoVacio">Tu carrito está vacío</h2>
    )
};

export default ShoppingCart;