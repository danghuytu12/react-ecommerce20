import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from "./products/Products";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";

const Pages = () => {
    return (
        <Router>
            <Route path="/" exact component={Products} />

            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />

            <Route path="/cart" exact component={Cart} />

        </Router>
    )
};

export default Pages;
