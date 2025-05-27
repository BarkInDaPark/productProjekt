import React, { useState, useEffect } from 'react';
import styles from './toastBar.module.css';
import { use } from 'react';
function ToastBar({message}) {

    const [latestToast, setLatestToast] = useState('');
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // setShowToast(false);
        if(latestToast !== message) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2500);
        }
    }, []);

    return(
        showToast ?
        <div className={styles.toast}>
            {message}
        </div>
        : <div><p>error</p></div>
    )
}
export default ToastBar;