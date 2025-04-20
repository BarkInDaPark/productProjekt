import FetchData from './FetchData';
import styles from './productsRendering.module.css';
import {useEffect, useState} from "react"; 
import { useNavigate } from 'react-router-dom';


function  ProductsRendering({products, setProducts, setClickedProduct}) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    const handleClick = (product) => {
        console.log("product clicked: ", product._id);
        setClickedProduct(product);
        navigate(`/product/${product._id}`);


    };

    return(
        <div className={styles.container}>
            <FetchData  setProducts={setProducts} setLoading={setLoading}/>
            {loading ? <h1>Loading...</h1> : 
            products.map((product) => (
                <div className={styles.cardContainer} onClick={() => handleClick(product)} key={product._id}>
                    <img className={styles.cardImg} src={product.imageUrl} />
                    <h1 className={styles.cardHOne}>{product.name}</h1>
                    <p className={styles.para}>{product.description}</p>
                    <h1 className={styles.cardHTwo}>{product.price}$</h1>
                </div>
                ))};
        </div>
    )
};
export default ProductsRendering;