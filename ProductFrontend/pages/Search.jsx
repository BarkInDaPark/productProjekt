import FetchSearch from '../components/fetchSearch';
import styles from './search.module.css'
import { useState } from 'react';

function Search(){

const [product, setProduct] = useState({});

    return(
        <div className={styles.outerContainer}>
            <FetchSearch setProduct={setProduct}/>
             {!product ? <h1>Loading...</h1> :
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