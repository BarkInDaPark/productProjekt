import ProductsRendering from "../components/ProductsRendering";
import {useEffect, useState} from "react";
import styles from './products.module.css';
function Products() {

    const [products, setProducts] = useState([]);
    const[clickedProduct, setClickedProduct] = useState({});
    return (
        <div>
            <div className={styles.innerContainer}>
                <h1 className={styles.innerH}>Our excellent products:</h1>
            </div>
            <ProductsRendering  products = {products} setProducts={setProducts} setClickedProduct={setClickedProduct} renderFive={false}/>
        </div>
    )
}
export default Products;