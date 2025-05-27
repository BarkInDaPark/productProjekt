import React, { useState, useEffect } from 'react';
import styles from './toastBar.module.css';
import { use } from 'react';
function ToastBar({message}) {

    const [showToast, setShowToast] = useState(false);

    return(
        <div className={styles.toast}>
            {message}
        </div>
    )
}
export default ToastBar;