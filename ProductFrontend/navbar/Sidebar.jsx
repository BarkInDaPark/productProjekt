import styles from './sidebar.module.css';
function Sidebar(){
    return(
        <div className={styles.container}>
            <h1 className={styles.h}>Category's</h1>
            <ul className={styles.list}>
                <li className={styles.listItems}>Electronic</li>
                <li className={styles.listItems}>Fitness</li>
                <li className={styles.listItems}>Home</li>
                <li className={styles.listItems}>outdoor</li>
            </ul>
        </div>
    )
}
export default Sidebar;