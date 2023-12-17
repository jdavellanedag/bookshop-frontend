import CartElements from "../components/CartElements";
import {useContext} from "react";
import {LibraryContext} from "../context/LibraryContext";
import "../styles/shoppingCartStyle.css"
const ShoppingCart = () => {
    const { cartProduct } = useContext(LibraryContext);

    return cartProduct.length > 0 ? (
        <>
            <CartElements />
        </>
    ) : (
        <h2 className="carritoVacio">Tu carrito está vacío</h2>
    )
};

export default ShoppingCart;