import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

function Sidebar() {

    const data = useContext(DataContext);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        let brandList = [];
        data.newData.forEach((product) => {
            brandList.push(product.name)
        })

        let set = new Set();
        brandList.forEach((brand) => {
            set.add(brand);
        })

        brandList = [];
        set.forEach((ele) => {
            brandList.push(ele);
        })

        setBrands(brandList);

    }, [data.newData])
    let id = 1;

    return (
        <aside>
            <div className="categories">
                <h3>Categories</h3>
                <div className="category">
                    <input
                        type="checkbox"
                        name="category"
                        id="white"
                    />
                    <label htmlFor="white"> white shirts</label>
                </div>
                <div className="category">
                    <input
                        type="checkbox"
                        name="category"
                        id="fullsleeve"
                    />
                    <label htmlFor="white"> fullsleeve</label>
                </div>
                <div className="brand-category">
                    <h3>Brands</h3>
                    {
                        brands.map((brand) => {
                            return <div className="brandList" key={`${id++}`}>
                                <input
                                    type="checkbox"
                                    name='brand'
                                />
                                <label> &nbsp;{brand}</label>
                            </div>
                        })
                    }
                </div>
                <div className="discount-category">
                    <h3>discount range</h3>
                    <input type="radio" name="discount" id="10"/>
                    <label htmlFor="10"> 10% and above</label> <br />
                    <input type="radio" name="discount" id="20"/>
                    <label htmlFor="20"> 20% and above</label> <br />
                    <input type="radio" name="discount" id="30"/>
                    <label htmlFor="30"> 30% and above</label> <br />
                    <input type="radio" name="discount" id="40"/>
                    <label htmlFor="40"> 40% and above</label> <br />
                    <input type="radio" name="discount" id="50"/>
                    <label htmlFor="50"> 50% and above</label> <br />
                    <input type="radio" name="discount" id="60"/>
                    <label htmlFor="60"> 60% and above</label> <br />
                    <input type="radio" name="discount" id="70"/>
                    <label htmlFor="70"> 70% and above</label> <br />
                    <input type="radio" name="discount" id="80"/>
                    <label htmlFor="80"> 80% and above</label> <br />
                    <input type="radio" name="discount" id="90"/>
                    <label htmlFor="90"> 90% and above</label> <br />
                </div>
            </div>
        </aside >
    )
}

export { Sidebar };