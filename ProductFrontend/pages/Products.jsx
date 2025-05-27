import ProductsRendering from "../components/ProductsRendering";
import {useEffect, useState, useRef} from "react";
import styles from './products.module.css';
import ToastBar from "../navbar/ToastBar";
function Products({shoppingCart, cartLength, setCartLength}) {

    

    const [products, setProducts] = useState([]);
    const[clickedProduct, setClickedProduct] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [items, setItems] = useState(0);

    useEffect(() => {

        if (shoppingCart.length > cartLength) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2500);
            setCartLength(shoppingCart.length);
        }
        
        
    }, [shoppingCart])

    return (
        <div>
            <div className={styles.innerContainer}>
                {showToast ? <ToastBar message={shoppingCart[shoppingCart.length-1].name + " added to cart!"}/>: null}
                <h1 className={styles.innerH}>Our excellent products:</h1>
            </div>
            <ProductsRendering  products = {products} setProducts={setProducts} setClickedProduct={setClickedProduct} renderFive={false}/>
        </div>
    )
}
export default Products;