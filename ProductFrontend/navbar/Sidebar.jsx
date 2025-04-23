import styles from './sidebar.module.css';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function Sidebar(){

    const [category, setCategory] = useState(['Electronics', 'Fitness', 'Home', 'Outdoor']);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

   const handleClick = (cat) => {
        navigate('/Products/' + cat);
        window.location.reload();


    }

    return(
        <div className={styles.container}>
            <h1 className={styles.h}>Category's</h1>
            <ul className={styles.list}>
                <li className={styles.listItems} onClick={() => handleClick(category[0])}>{category[0]}</li>
                <li className={styles.listItems} onClick={() => handleClick(category[1])}>{category[1]}</li>
                <li className={styles.listItems} onClick={() => handleClick(category[2])}>{category[2]}</li>
                <li className={styles.listItems} onClick={() => handleClick(category[3])}>{category[3]}</li>
            </ul>
        </div>
    )
}
export default Sidebar;