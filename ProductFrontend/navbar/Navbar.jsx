import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import styles from'./navbar.module.css';
import searchIcon from '../assets/magnifyingGlass.png';
import cartIcon from '../assets/cart.png';


function Navbar({shoppingCart}) {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [pollingValue, setPollingValue] = useState('');
    const [product, setProduct] = useState([]);
    

    //without this, when inside a category and then pressing products on navbar the page wont refresh.
    const handleClick = () => {
        //window.location.reload();
    };

    const handleSearch = () => {
        setSearchInput('');
        setPollingValue('');
        setProduct([]);
    };

    function handleSubmit(e) {
        e.preventDefault();
        // window.location.reload();
        const form = e.target;
        const formData = new FormData(form);    
        const formJson = Object.fromEntries(formData.entries());
        
        navigate(`/search/${formJson.search}`);
        handleSearch();
    };

    const fetchSearch = async (searchInput) => {
        try {
            const respone = await fetch(`http://localhost:3000/api/products/search/${searchInput}`);
            const data = await respone.json();
            await setProduct(data);
            console.log('product length: ' + product.length);
        } catch (error) {
            console.log('Error fetching product:', error);
        }
    }

    useEffect(() => {
        if(searchInput !== pollingValue && searchInput.length > 0){
            setPollingValue(searchInput);
            fetchSearch(searchInput);
            
        }
    },[searchInput]);

    return(
        <nav className={styles.navbar}>
            <ul className={styles.listItems}>
                <li className={styles.item}><Link className={styles.itemLink} to="/">Home</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/products">Products</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/about">About</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/contact">Contact</Link></li>
            </ul>
            <div>
                <Link className={styles.cartLink} to="/cart">
                    <button className={styles.cartButton}>
                        {shoppingCart.length > 0 ? shoppingCart.length : 0}
                        <img className={styles.cartImage} src={cartIcon}/>
                    </button>
                </Link>
            </div>
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
                {product.length > 0 && Array.isArray(product) ? 
                <ul className={styles.searchList}>
                    {product.slice(0, 5).map((prod) => (
                        <li key = {prod.id} className={styles.searchItem} onClick={() => {handleSearch()}}>
                            <img className={styles.searchItemImage} src={prod.imageUrl}/>
                            <Link className={styles.searchItemLink} to={`/product/${prod._id}`}>
                                {prod.name}
                            </Link>
                            <p className={styles.searchItemPrice}>{prod.price}$</p>
                        </li>
                    ))}
                </ul>
                :
                null
                }
            </form>
            </div>
        </nav>

    )
}
export default Navbar;