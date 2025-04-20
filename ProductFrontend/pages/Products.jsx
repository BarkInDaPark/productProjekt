import ProductsRendering from "../components/ProductsRendering";
import {useEffect, useState} from "react";
function Products() {

    const [products, setProducts] = useState([]);
    const[clickedProduct, setClickedProduct] = useState({});
    return (
        <div>
            <h1>Our excellent products:</h1>
            <ProductsRendering  products = {products} setProducts={setProducts} setClickedProduct={setClickedProduct}/>
        </div>
    )
}
export default Products;