import FetchSearch from '../components/fetchSearch';
import styles from './search.module.css';
import { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom'; 

function Search(){

    const navigate = useNavigate();
    const noProduct = `No products found with this search: "${useParams().id}"`;

    const handleClick = (product) => {
        console.log("product clicked: ", product._id);
        // setClickedProduct(product);
        navigate(`/product/${product._id}`);


    };

const [product, setProduct] = useState([]);

    return(
        <div className={styles.container}>
            <FetchSearch setProduct={setProduct}/>
             {product.length === 0 ? <h1>{noProduct}</h1> :
                product.map((product) => (
                    <div className={styles.cardContainer} onClick={() => handleClick(product)} key={product._id}>
                        <img className={styles.cardImg} src={product.imageUrl} />
                        <h1 className={styles.cardHOne}>{product.name}</h1>
                        <p className={styles.para}>{product.description}</p>
                        <h1 className={styles.cardHTwo}>{product.price}$</h1>
                    </div>))}
                         
        </div>
    )
}
export default Search;