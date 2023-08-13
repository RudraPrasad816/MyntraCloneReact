import { useEffect, useState } from "react";
import { ProductCard } from "./index";


function ProductContainer(props) {


    const [products, setProducts] = useState([]);
    let id = 1;

    useEffect(()=>{
        setProducts(props.products);
    }, [props.products])

    return (
        <div className="product_container">
            {
                products.map((product) => {
                    return (
                        <ProductCard data = {product} key={id++} />
                    )
                })
            }
        </div>
    )
}

export { ProductContainer };