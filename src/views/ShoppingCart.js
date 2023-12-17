import CartElements from "../components/CartElements";
import React, {useContext} from "react";
import {LibraryContext} from "../context/LibraryContext";
import "../styles/shoppingCartStyle.css"
import useRedirection from "../hooks/useRedirection";
import {useNavigate} from "react-router";
const ShoppingCart = () => {
    const { cartProduct, rentBooks, setRentBooks, setCartProduct } = useContext(LibraryContext);
    const navigate = useNavigate();

    const addLibrosAlquilados = () => {
        setRentBooks(rentBooks => [...rentBooks, ...cartProduct]);
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