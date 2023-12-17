import {useContext} from "react";
import {LibraryContext} from "../context/LibraryContext";

const TotalItemsCart = () => {
    const { cartProduct } = useContext(LibraryContext);

    const itemsQuanty = cartProduct.length;
    return <span className="cart-items-total">{itemsQuanty}</span>;
};

export default TotalItemsCart