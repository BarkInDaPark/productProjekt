import { Link } from "react-router-dom";
import React from "react";
import styles from'./navbar.module.css';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.listItems}>
                <li className={styles.item}><Link className={styles.itemLink} to="/">Home</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/products">Products</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/about">About</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/contact">Contact</Link></li>
                <li className={styles.item}><Link className={styles.itemLink}to="/todo">Todo</Link></li>
            </ul>
        </nav>

    )
}
export default Navbar;