import CartElements from "../components/CartElements";
import React, {useContext} from "react";
import {LibraryContext} from "../context/LibraryContext";
import "../styles/shoppingCartStyle.css"
const ShoppingCart = () => {
    const { cartProduct } = useContext(LibraryContext);




    return cartProduct.length > 0 ? (
        <div className="elementos-carrito">
            <h2 className="titulo-carrito">Carrito de libros</h2>
            <CartElements />
            <input className="boton-tramitar-alquiler" type="button" value="Alquilar" />
        </div>
    ) : (
        <h2 className="carritoVacio">Tu carrito está vacío</h2>
    )
};

export default ShoppingCart;