import {LibraryContext} from "../context/LibraryContext";
import React, {useContext} from "react";
const CartElements = () => {
    const { cartProduct } = useContext(LibraryContext);

    return cartProduct.map((product) => {
            return (
                <div className="cartContent" key={product.id}>
                    <img src={product.portada} alt={product.portada}/>
                    <h3 className="name">{product.nombre}</h3>
                </div>
            )
        }

    )
};

export default CartElements;