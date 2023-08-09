import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <ProductList />
            </Route>
            <Route path="/products/:id">
                <ProductDetail />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
        </Switch>
    );
}

export default Routes;