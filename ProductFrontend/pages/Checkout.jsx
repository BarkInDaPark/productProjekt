import { useNavigate } from 'react-router-dom';
import styles from './checkout.module.css';



function Checkout({shoppingCart, setShoppingCart, setOrderId}) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        

        const formatedData = {...formJson,
                products: shoppingCart.map(prod => ({
                    productId: prod._id,
                    quantity: prod.quantity
                })),
                totalPrice: shoppingCart.reduce((total, prod) => total + (prod.price * prod.quantity), 0).toFixed(2),
            };
        console.log('Form submitted:', formatedData);
        sendOrder(formatedData);



    }

    const sendOrder = async (orderData) => {
        try {
            const response = await fetch('http://localhost:3000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if(response.ok){
                const data = await response.json();
                await setOrderId(data.orderId);
                navigate('/orderplaced');
                console.log('order sent successfully: ', data.orderId);
            }else{
                const error = await response;
                console.error('Error sending order:', error);
            }
        } catch (error){
            console.error('Network error:', error);
        }
    }


    return (
        <div className={styles.checkoutContainer}>
            <form className={styles.checkoutForm} onSubmit={handleSubmit}>
               <div className={styles.checkoutFormInfo}>
                    <p className={styles.inputParagraph}>first name:</p>
                    <input name='firstName' type='text' placeholder='First Name' required  className={styles.input}/>
                    <p className={styles.inputParagraph}>last name:</p>
                    <input name='lastName' type='text' placeholder='Last Name' required className={styles.input}/>
                    <p className={styles.inputParagraph}>Email:</p>
                    <input name='email' type='email' placeholder='Email' required className={styles.input}/>
                    <p className={styles.inputParagraph}>address:</p>
                    <input name='address' type='text' placeholder='Address' required className={styles.input}/>
                    <p className={styles.inputParagraph}>city:</p>
                    <input name='city' type='text' placeholder='City' required className={styles.input}/>
                    <p className={styles.inputParagraph}>postal code:</p>
                    <input name='postalCode' type='text' placeholder='Postal Code' required className={styles.input}/>
                    <p className={styles.inputParagraph}>country:</p>
                    <input name='country' type='text' placeholder='Country' required className={styles.input}/>
                    <p className={styles.inputParagraph}>phone number:</p>
                    <input name='phone' type='tel' placeholder='Phone Number' required className={styles.input}/>
                    <button type='submit' className={styles.submitButton}>Checkout</button>
                </div>
                <div  className={styles.checkoutFormCard}>
                    <p className={styles.cardParagraph}>Card holders full name:</p>
                    <input name='cardName' type='text' placeholder='Card Name' required className={styles.cardInput}/>
                    <p className={styles.cardParagraph}>Card number:</p>
                    <input name='cardNumber' type='text' placeholder='Card Number' required className={styles.cardInput}/>
                    <p className={styles.cardParagraph}>exp date:</p>
                    <input name='cardExp' type='text' placeholder='exp date' required className={styles.cardInput}/>
                    <p className={styles.cardParagraph}>ccv:</p>
                    <input name='cardCcv' type='text' placeholder='ccv' required className={styles.cardInput}/>
                </div>
                
            </form>
            <form>
                

            </form>
        </div>
    )
}
export default Checkout;