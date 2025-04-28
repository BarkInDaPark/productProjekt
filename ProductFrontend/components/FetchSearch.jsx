import { useParams} from "react-router-dom";
import { useEffect } from "react";


function FetchSearch({setProduct}){

    const {id} = useParams();

    useEffect(() => {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/products/search/${id}`);
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
export default FetchSearch;