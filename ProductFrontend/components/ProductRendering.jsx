import FetchSingleData from "./FetchSingleData";
import { useParams, useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./ProductRendering.module.css";
import ToastBar from "../navbar/ToastBar";


function ProductRendering({shoppingCart, setShoppingCart}) {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [added, setAdded] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setShoppingCart(prev =>[...prev, product]);
        
        setAdded(true);
    }
    useEffect(() => {
        if (added){
            navigate('/products');
            setAdded(false);
        }
    }, [added])
    
    return (
        <div className={styles.outerContainer}>
            
            <FetchSingleData setProduct={setProduct} id={id}/>
            {!product ? <h1>Loading...</h1> :
                <div className={styles.innerContainer}>
                    {console.log(product)}
                    <div className={styles.innerInnerContainer}>
                        <h1 className={styles.cardHOne}>{product.name}</h1>
                        <p className= {styles.paraTwo}>Art nr: {product._id}</p>
                        <p className={styles.para}>{product.description}</p>
                        <h1 className={styles.cardHTwo}>{product.price}$</h1>
                        <button className={styles.addToCartButton} onClick={handleClick}>add to cart</button>
                    </div>
                    <img className={styles.cardImg} src={product.imageUrl} />
                    
                </div>
            }
        </div>
    );
}
export default ProductRendering;