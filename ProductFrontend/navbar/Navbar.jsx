import { Link } from "react-router-dom";
import React from "react";
import styles from'./navbar.module.css';
import searchIcon from '../assets/magnifyingGlass.png'; // Assuming you have a search icon image in the same directory
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    //without this, when inside a category and then pressing products on navbar the page wont refresh.
    const handleClick = () => {
        window.location.reload();
    };
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.myInput);
        
        navigate(`/search/${formJson.myInput}`);


        
    }

    return(
        <nav className={styles.navbar}>
            <ul className={styles.listItems}>
                <li className={styles.item}><Link className={styles.itemLink} to="/">Home</Link></li>
                <li className={styles.item} onClick={() => {handleClick()}}><Link className={styles.itemLink} to="/products">Products</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/about">About</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/contact">Contact</Link></li>
            </ul>
            <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit}>
                <input className={styles.searchBar} name="myInput" type="text" placeholder="Search..."/>
                <button type="submit" className={styles.searchButton}>
                    <img className={styles.searchImage} src={searchIcon}/>
                </button>4
            </form>
            </div>
        </nav>

    )
}
export default Navbar;