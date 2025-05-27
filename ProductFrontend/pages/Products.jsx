import ProductsRendering from "../components/ProductsRendering";
import {useEffect, useState} from "react";
import styles from './products.module.css';
import ToastBar from "../navbar/ToastBar";
function Products({shoppingCart}) {

    

    const [products, setProducts] = useState([]);
    const[clickedProduct, setClickedProduct] = useState({});
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
        
    }, [shoppingCart])

    return (
        <div>
            <div className={styles.innerContainer}>
                {showToast && shoppingCart.length > 0 && <ToastBar message={shoppingCart[shoppingCart.length-1].name + " added to cart!"}/>}
                <h1 className={styles.innerH}>Our excellent products:</h1>
            </div>
            <ProductsRendering  products = {products} setProducts={setProducts} setClickedProduct={setClickedProduct} renderFive={false}/>
        </div>
    )
}
export default Products;