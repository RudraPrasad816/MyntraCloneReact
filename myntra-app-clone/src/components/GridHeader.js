
function GridHeader(props) {

    return (
        <>
            <section className="product_header">
                <p className="product_path">Home / {sessionStorage.getItem('page')}</p>
                <p className="product_count">
                    {
                        sessionStorage.getItem('page') === "mens_product" 
                        ?
                        "Men's Products"
                        :
                        "Women's Products"
                    }
                    <span>
                        &nbsp; {props.productsCount} items
                    </span>
                </p>
                <h3>Filters</h3>
                <select name="bundle" id="bundle">
                    <option value="none">Bundles</option>
                </select>
                <select name="country" id="countryorigin">
                    <option value="none" default>Country of Origin</option>
                </select>
                <select name="size" id="size">
                    <option value="none">Size</option>
                </select>

            </section>
        </>
    )
}

export { GridHeader };