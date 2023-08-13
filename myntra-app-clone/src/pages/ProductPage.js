import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from '../data/data';

export function ProductPage() {

    const id = useParams().id;
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const [pathname, setPathname] = useState("");

    useEffect(
        () => {
            var productchoose = data.filter((element) => {
                return `${element.id}` === id[0];
            })
            setPathname(setPathName());
            setProduct(productchoose[0]);
            setImages(productchoose[0].otherImages);
        }, []
    )

    function setPathName() {
        let path = window.location.pathname;
        path = "home" + path.split("%20").join(" ");
        return path
    }
    let keyid = 1;

    return (
        <div className="product-description-wrapper">
            <p>{pathname}</p>
            <div className="product-description-container">
                <div className="image-section">
                    {
                        images.map((element)=>{
                            return(
                                <div className="image-container" key={keyid++}>
                                <img src={element} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="product-detail-section">
                    <h2>{product.name}</h2>
                    <p className="product-description"></p>
                    <p className="price-description"></p>
                    <button>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="product-suggestion-container">

            </div>
        </div>
    )
}