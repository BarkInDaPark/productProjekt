import { Link } from "react-router-dom";
import React from "react";
import styles from'./navbar.module.css';
import searchIcon from '../assets/magnifyingGlass.png'; // Assuming you have a search icon image in the same directory

function Navbar() {

    const handleClick = () => {
        window.location.reload();
    };

    return(
        <nav className={styles.navbar}>
            <ul className={styles.listItems}>
                <li className={styles.item}><Link className={styles.itemLink} to="/">Home</Link></li>
                <li className={styles.item} onClick={() => {handleClick()}}><Link className={styles.itemLink} to="/products">Products</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/about">About</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/contact">Contact</Link></li>
            </ul>
            <div className={styles.searchContainer}>
            <input className={styles.searchBar} type="text" placeholder="Search..."/>
            <button className={styles.searchButton}>
                <img className={styles.searchImage} src={searchIcon}/>
            </button>
            </div>
        </nav>

    )
}
export default Navbar;