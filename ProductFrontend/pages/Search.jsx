import FetchSearch from '../components/fetchSearch';
import styles from './search.module.css'
import { useState } from 'react';

function Search(){

const [product, setProduct] = useState({});

    return(
        <div className={styles.outerContainer}>
            <FetchSearch setProduct={setProduct}/>
             {!product ? <h1>Loading...</h1> :
                             <div className={styles.innerContainer}>
                                 {console.log(product)}
                                 <div className={styles.innerInnerContainer}>
                                     <h1 className={styles.cardHOne}>{product.name}</h1>
                                     <p className= {styles.paraTwo}>Art nr: {product._id}</p>
                                     <p className={styles.para}>{product.description}</p>
                                     <h1 className={styles.cardHTwo}>{product.price}$</h1>
                                 </div>
                                 <img className={styles.cardImg} src={product.imageUrl} />
                                 
                             </div>
                         }
        </div>
    )
}
export default Search;