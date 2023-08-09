import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./actions";

function Cart() {
    const cart = useSelector(store => store.cart);
    const products = useSelector(store => store.products);

    const dispatch = useDispatch();
    function addItem(id) { dispatch(add(id)); }
    function removeItem(id) { dispatch(remove(id)); }

    let grandTotal = 0;

    return (
    <>
        <h1>Shoply</h1>
        <h2>Cart</h2>
        {Object.entries(cart).map(pair => {
            const [id, qty] = pair;
            if (qty === 0) return;

            const { image_url, name, price } = products[id];

            return (
                <div key={id}>
                    <h5>{ name.toUpperCase() }</h5>
                    <img src={ image_url } height="250" width="250" alt="" />
                    <p>Price per unit: { price }</p>
                    <p>Units in cart: { qty }</p>
                    <p><b>Item subtotal: { price * qty }</b></p>
                    <p>Running Total: { grandTotal += price * qty }</p>
                    <button onClick={() => addItem(id)}>Add One</button>
                    <button onClick={() => removeItem(id)}>Remove One</button>
                </div>
            )
        })}
        <h6><b>Grand Total: { grandTotal = Math.round(grandTotal * 100) / 100 }</b></h6>
    </>
    );
}

export default Cart;