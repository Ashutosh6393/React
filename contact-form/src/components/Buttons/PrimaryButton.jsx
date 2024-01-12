import React from 'react';
import styles from './Buttons.module.css'
const PrimaryButton = ({text, icon}) => {
    return (
        <button className={styles.primary}>
            {icon}
            {text}
        </button>
    );
}

export default PrimaryButton;
