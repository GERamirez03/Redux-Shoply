import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./actions";
import { Link } from "react-router-dom";

function ProductList() {
    const products = useSelector(store => store.products);
    const entries = Object.entries(products);

    const dispatch = useDispatch();
    function addItem(id) { dispatch(add(id)); }
    function removeItem(id) { dispatch(remove(id)); }

    return (
    <>
        <h1>Shoply</h1>
        <h2>Products</h2>
        <ul>
            {entries.map(entry => {
                const [id, product] = entry;
                const { name, price } = product;

                return (
                    <li key={id}>
                        <Link to={`/products/${id}`}>{ name.toUpperCase() + ` ($${price})` }</Link>
                        <button onClick={() => addItem(id)}>Add to Cart</button>
                        <button onClick={() => removeItem(id)}>Remove from Cart</button>
                    </li>
                );
            })}
        </ul>
        <Link to="/cart">Go to Cart</Link>
    </>
    );
}

export default ProductList;