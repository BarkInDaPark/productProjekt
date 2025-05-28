import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import styles from './cart.module.css';
import trashCan from '../assets/trashCan.svg';
function Cart({shoppingCart, setShoppingCart}) {

    const [totalPrice, setTotalPrice] = useState(0);
    const [deleted, setDeleted] = useState(false);
    const [cart, setCart] = useState(shoppingCart);

    const handleClick = (e) => {
        setCart(prev =>
            prev.filter(prod => prod._id !== e._id));
    }

    useEffect(() => {
        const total = cart.reduce((sum, prod) => sum + prod.price, 0)
        setTotalPrice(total);
        setShoppingCart(cart);
        // shoppingCart.map((prod) => setTotalPrice((prev) => prev + prod.price));
    }, [cart]);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
            {cart.length > 0 ? 
                <ul className={styles.cartList}>
                    {cart.map((prod) => (
                        <li key = {prod._id} className={styles.cartItem}>
                            <img className={styles.cartItemImage} src={prod.imageUrl}/>
                            <Link className={styles.cartItemLink} to={`/product/${prod._id}`}>
                                {prod.name}
                            </Link>
                            <p className={styles.cartItemPrice}>{prod.price}$</p>
                            <p>qty:</p>
                            <button className={styles.trashButton} onClick={() => {handleClick(prod)}}>
                                <img src={trashCan} className={styles.trashImg}/>
                            </button>
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