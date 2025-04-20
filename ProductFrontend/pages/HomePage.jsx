import styles from './homepage.module.css';
import ProductsRendering from '../components/ProductsRendering.jsx';
import easterBanner from '../assets/easterBanner.jpg';
import { useEffect, useState } from "react";


function Homepage(){
    const [products, setProducts] = useState([]);
    const[clickedProduct, setClickedProduct] = useState({});

    return (
        <div className={styles.container}>
            <h1 className={styles.h}>Welcome to product town! the place who got everything!</h1>
            <div>
                <img className={styles.image} src={easterBanner}></img>
                <h1>Easter is here and we got the things you need to get the perfect easter</h1>
            </div>
            <h1>Weekly offers:</h1>
            <div>
            <ProductsRendering  products = {products} setProducts={setProducts} setClickedProduct={setClickedProduct} renderFive={true}/>
            </div>
        </div>
    )
}
export default Homepage;