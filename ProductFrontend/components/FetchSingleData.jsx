import { useEffect, useState } from 'react';

function FetchSingleData({setProduct, id}) {

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
                console.log("Product fetched successfully.");
            } catch (error) {
                console.log('Error fetching product:', error);
            };
        }

        fetchProduct();
    },[]) 
    return null;
}
export default FetchSingleData;