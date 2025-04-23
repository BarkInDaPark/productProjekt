import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function  FetchData({setProducts, setLoading}) {
    const { id } = useParams();
    const category = id ? `/${id}` : '/';0

    useEffect(() =>{
        
        const fetchProducts = async () => {
            console.log("category: ", category);
            try{
                let response;
                if (category !== '/'){
                    const response = await fetch(`http://localhost:3000/api/products/category${category}`);
                    const data = await response.json();
                    setProducts(data);
                    console.log('1');
                } else {
                    const response = await fetch('http://localhost:3000/api/products');
                    const data = await response.json();
                    setProducts(data);
                    console.log('2');
                }
                
               
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
        console.log("Fetching products...");
    },[]);


    return null;
}
export default FetchData;