import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./product.module.css"

import ProductRendering from "../components/ProductRendering";

function Product () {

    return (
        <div className={styles.outerContainer}>
            <ProductRendering />
        </div>
    )
};
export default Product;