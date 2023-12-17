import {LibraryContext} from "../context/LibraryContext";
import React, {useContext} from "react";
import { MdDelete } from "react-icons/md";
const CartElements = () => {
    const { cartProduct, setCartProduct } = useContext(LibraryContext);
    const deleteProduct = (id) => {
        const foundId =  cartProduct.find((item) => item.id === id);
        const newCart = cartProduct.filter((element) => {
            return element !== foundId;
        });
        setCartProduct(newCart);
    }

    return cartProduct.map((product) => {
            return (
                <div className="cartContent" key={product.id}>
                    <img src={product.portada} alt={product.portada}/>
                    <h3 className="name">{product.nombre}</h3>
                    <h3 className="cart-delete-button" onClick={() => deleteProduct(product.id)}><MdDelete /></h3>
                </div>
            )
        }

    )
};

export default CartElements;