import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.navMenu}>
            <ul>
                <li>
                    <NavLink to={'/'} className={({isActive}) => isActive? styles.active : undefined} end>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/products'} className={({isActive}) => isActive? styles.active : undefined} >Products</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
