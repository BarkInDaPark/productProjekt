import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import styles from './cart.module.css';
function Cart({shoppingCart, setShoppingCart}) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(0);
        shoppingCart.map((prod) => setTotalPrice((prev) => prev + prod.price));
    }, [shoppingCart]);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
            {shoppingCart.length > 0 ? 
                <ul className={styles.cartList}>
                    {shoppingCart.map((prod) => (
                        <li key = {prod.id} className={styles.cartItem} onClick={() => {handleSearch()}}>
                            <img className={styles.cartItemImage} src={prod.imageUrl}/>
                            <Link className={styles.cartItemLink} to={`/product/${prod._id}`}>
                                {prod.name}
                            </Link>
                            <p className={styles.cartItemPrice}>{prod.price}$</p>
                        </li>
                    ))}
                </ul>
                :
                <h1>Shopping cart empty</h1>
            }
        </div>
            <div className={styles.checkoutContainer}>
                <h1>total price: {totalPrice}$</h1>
                <Link to= '/checkout'>
                    <button className={styles.checkoutButton}>CheckOut</button>
                </Link>
            </div>
        </div>
    )
}
export default Cart;