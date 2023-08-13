import { useContext, useEffect, useState } from "react";
import { GridHeader, Sidebar, ProductContainer } from "../components";
import { DataContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import data from '../data/data';

function ProductsPage() {

    const page = useParams().page;

    const navigate = useNavigate();

    const products = useContext(DataContext);

    const [productdata, setProductData] = useState([]);

    useEffect(() => {
        if (page === 'mens products') {
            sessionStorage.setItem('page', "mens products");
            const filterData = data.filter((ele) => { return ele.gender === 'M' })
            products.setNewDataClick(filterData);
            setProductData(filterData);
        }
        else if (page === 'womens products') {
            sessionStorage.setItem('page', "womens products");
            const filterData = data.filter((ele) => { return ele.gender === 'F' })
            products.setNewDataClick(filterData);
            setProductData(filterData);
        }
        else {
            navigate("/pagenotfound")
        }
    }, [page])

    return (
        <div className="container">
            <GridHeader productsCount={productdata.length} />
            <Sidebar setProducts={setProductData} />
            <ProductContainer products={productdata} />
        </div>
    )
}

export { ProductsPage };