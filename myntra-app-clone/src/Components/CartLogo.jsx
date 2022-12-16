import React from "react";
import shoppingCart from "../shoppingCart.svg";
import './ComponentStyles/CartLogo.css';
import {useNavigate} from 'react-router-dom';

const CartLogo = () => {

    const navigate = useNavigate();

    return (
        <div className="cartLogo" onClick={() =>navigate("/cart")}>
            <img src={shoppingCart} alt="cart" />
            <div className="cart-list-length">{1}</div>
        </div>
    )
}

export default CartLogo;