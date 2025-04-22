import FetchData from './FetchData';
import styles from './productsRendering.module.css';
import {useEffect, useState} from "react"; 
import { useNavigate } from 'react-router-dom';


function  ProductsRendering({products, setProducts, setClickedProduct, renderFour: renderWeeklyOffer}) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    const handleClick = (product) => {
        console.log("product clicked: ", product._id);
        setClickedProduct(product);
        navigate(`/product/${product._id}`);


    };

    //styles.container is the one to change to change the flex for homepage
    //but then products will also change.
    return(
        <div className={renderWeeklyOffer ? styles.containerFive : styles.container}> 
            <FetchData  setProducts={setProducts} setLoading={setLoading}/>
            
            
            {loading ? <h1>Loading...</h1> : 
            renderWeeklyOffer ? 
            products.slice(0, 4).map((product) => (
                <div className={styles.cardContainerWeeklyOffer} onClick={() => handleClick(product)} key={product._id}>
                    <img className={styles.cardImg} src={product.imageUrl} />
                    <h1 className={styles.cardHOne}>{product.name}</h1>
                    <p className={styles.para}>{product.description}</p>
                    <h1 className={styles.cardHTwoWeeklyOfferPrice}>{product.price*0.70}$</h1>
                    <h1 className={styles.cardHTwoWeeklyOffer}>{product.price}$</h1>
                </div>
                ))
                :
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