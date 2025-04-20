import { Link } from "react-router-dom";
import React from "react";
import styles from'./navbar.module.css';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.listItems}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/products">Products</Link></li>
                <li className={styles.item}><Link to="/about">About</Link></li>
                <li className={styles.item}><Link to="/contact">Contact</Link></li>
                <li className={styles.item}><Link to="/todo">Todo</Link></li>
            </ul>
        </nav>

    )
}
export default Navbar;