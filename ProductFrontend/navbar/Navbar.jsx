import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import styles from'./navbar.module.css';
import searchIcon from '../assets/magnifyingGlass.png';
import FetchSearch from "../components/fetchSearch";


function Navbar() {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [pollingValue, setPollingValue] = useState('');
    const [product, setProduct] = useState([]);

    //without this, when inside a category and then pressing products on navbar the page wont refresh.
    const handleClick = () => {
        window.location.reload();
    };
    function handleSubmit(e) {
        //e.preventDefault();
        // window.location.reload();
        const form = e.target;
        const formData = new FormData(form);    
        const formJson = Object.fromEntries(formData.entries());
        
        navigate(`/search/${formJson.search}`);


        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (searchInput !== pollingValue){
                setPollingValue(searchInput);
                console.log('product length: ' + product.length)

            }
        }, 500)
    },[searchInput]);

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
                <input className={styles.searchBar} 
                name="search" 
                type="text" 
                value = {searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
                />
                <button className={styles.searchButton} type="submit">
                    <img className={styles.searchImage} src={searchIcon}/>
                </button>
                {product.length === 0 ? null :
                <ul>
                    <li>{product.name}</li>
                </ul>
                }
            </form>
            </div>
        </nav>

    )
}
export default Navbar;