import styles from './orderPlaced.module.css';

function OrderPlaced({ orderId }) {
    return (
        <div className={styles.container} >
            <h1 className={styles.orderPlaced}>Thanks for placeing your order</h1>
            <h1 className={styles.order}>
                Order id: 
                <p  className={styles.orderId}>
                    {orderId}
                </p>
            </h1>
        </div>
    )
}
export default OrderPlaced;