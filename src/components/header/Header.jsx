import NavMenu from '../navMenu/NavMenu'
import SearchBar from '../searchBar/SearchBar'
import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 500) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    }, []);


    return (
        <div className={navbar ? `${styles.container} ${styles.container_active}` : `${styles.container}`}>
            <div className={styles.nav_block}>
                <div className={styles.title_container}>
                    <div className={styles.logo}></div>
                    <h2 className={styles.title}>DRAMA</h2>
                </div>
                <NavMenu/>
            </div>
            <SearchBar/>
        </div>
    )
}

export default Header