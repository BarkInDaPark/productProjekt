import FetchSearch from '../components/fetchSearch';
import styles from '../components/productsRendering.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Search(){

    const navigate = useNavigate();

    const handleClick = (product) => {
        console.log("product clicked: ", product._id);
        // setClickedProduct(product);
        navigate(`/product/${product._id}`);


    };

const [product, setProduct] = useState([]);

    return(
        <div className={styles.container}>
            <FetchSearch setProduct={setProduct}/>
             {!product ? <h1>Loading...</h1> :
                product.map((product) => (
                    <div className={styles.cardContainer} onClick={() => handleClick(product)} key={product._id}>
                        <img className={styles.cardImg} src={product.imageUrl} />
                        <h1 className={styles.cardHOne}>{product.name}</h1>
                        <p className={styles.para}>{product.description}</p>
                        <h1 className={styles.cardHTwo}>{product.price}$</h1>
                    </div>))}2
                         
        </div>
    )
}
export default Search;