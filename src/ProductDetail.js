import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./actions";
import { useParams } from "react-router-dom";

function ProductDetail() {

    const { id } = useParams();
    const product = useSelector(store => store.products[id]);

    const dispatch = useDispatch();
    function addItem(id) { dispatch(add(id)); }
    function removeItem(id) { dispatch(remove(id)); }

    const { name, price, description, image_url } = product;

    return (
    <>
        <h1>Shoply</h1>
        <h2>Product Details</h2>
        <h3><b>{ name.toUpperCase() }</b></h3>
        <img 
            src={image_url} 
            alt="" 
            width="300" 
            height="300" 
        />
        <p>{ description }</p>
        <p><b>Price: { price }</b></p>

        <button onClick={() => addItem(id)}>Add to Cart</button>
        <button onClick={() => removeItem(id)}>Remove from Cart</button>
    </>
    );
}

export default ProductDetail;