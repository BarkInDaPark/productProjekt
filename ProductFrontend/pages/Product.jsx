import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./product.module.css"

import ProductRendering from "../components/ProductRendering";

function Product ({shoppingCart ,setShoppingCart}) {

    return (
        <div className={styles.outerContainer}>
            <ProductRendering shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
        </div>
    )
};
export default Product;