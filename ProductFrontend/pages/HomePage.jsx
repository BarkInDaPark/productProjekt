import styles from './homepage.module.css';
import easterBanner from '../assets/easterBanner.jpg';


function Homepage(){
    return (
        <div className={styles.container}>
            <h1 className={styles.h}>Welcome to product town! the place who got everything!</h1>
            <div>
                <img className={styles.image} src={easterBanner}></img>
                <h1>Easter is here and we got the things you need to get the perfect easter</h1>
            </div>
        </div>
    )
}
export default Homepage;