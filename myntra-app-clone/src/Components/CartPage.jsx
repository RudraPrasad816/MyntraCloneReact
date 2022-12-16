import React from "react";
import data from '../data.js';
import './ComponentStyles/CartPage.css'

const CartPage = () => {

    const cartData = data[3];
    return (
        <div className="cartsection">
            <div className="cartproduct">
                <div className="cartImage"><img src={cartData.otherImages[0]} alt="" /></div>
                <div></div>
                <div className="cartdescription">
                    <h1>{cartData.name}</h1>
                    <p>{cartData.description}</p>
                    <p className="price"><b>rs:</b><s>{cartData.strickPrice}</s><span> {cartData.discount}% {cartData.finalPrice}</span></p>
                    <p className="size">size:</p>
                    {cartData.productSize}
                    <br />
                    <button>Buy now</button><button>Remove</button>
                </div>
            </div>
        </div>
    )
}
// {cartData.otherImages[0]}
export default CartPage;