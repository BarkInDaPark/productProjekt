import styles from './contact.module.css';

function Contact() {
    return (
        <div className={styles.container}>
            <h1>Got problems?  Call us!</h1>
            <h2>+1 800 555 5555</h2>
            <h3>or email us at:</h3>
            <h3>ProductTown@ProductTown.com</h3>
            <h4>open for calling:</h4>
            <h4>Monday to Friday</h4>
            <h4>9:00 AM to 5:00 PM</h4>
        </div>
    )
}
export default Contact;