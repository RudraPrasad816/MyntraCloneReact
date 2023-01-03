import React from "react";
import './ComponentStyles/Card.css';

const Card = (props) => {
    let id = 0;
    const productDescription = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="card">
            <div className="productcard">
                { 
                    props.newData.map((product) => {
                        return (
                            <div key={id++} className="Productimage" onClick={() => { productDescription(product.link) }}>
                                <div className="displayImage"><img src={product.otherImages[0]} alt="" /></div>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p><b>rs:</b><s>{product.strickPrice} </s><span>{product.discount}% {product.finalPrice}</span></p>
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
    )
}

export default Card;