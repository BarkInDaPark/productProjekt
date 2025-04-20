import ProductsRendering from "../components/ProductsRendering";
import {useEffect, useState} from "react";
import styles from './products.module.css';
function Products() {

    const [products, setProducts] = useState([]);
    const[clickedProduct, setClickedProduct] = useState({});
    return (
        <div>
            <div>
                <h1>Our excellent products:</h1>
            </div>
            <ProductsRendering  products = {products} setProducts={setProducts} setClickedProduct={setClickedProduct} renderFive={false}/>
        </div>
    )
}
export default Products;