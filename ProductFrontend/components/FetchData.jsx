import React, { useEffect, useState } from 'react';

function  FetchData({setProducts, setLoading}) {
    

    useEffect(() =>{
        const fetchProducts = async () => {
            try{
                const response = await fetch('http://localhost:3000/api/products');
                const data = await response.json();
                setProducts(data);
                if (data.length === 0) 
                    console.log("No products found.");
                
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            };
        };

        fetchProducts();
        console.log("Fetching products...");
    },[]);


    return null;
}
export default FetchData;