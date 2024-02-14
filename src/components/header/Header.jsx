import NavMenu from '../navMenu/NavMenu'
import SearchBar from '../searchBar/SearchBar'
import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navbarVisability, setNavbarVisability] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 500) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            };
    
            window.addEventListener('resize', handleResize);
    
            return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth <= 1100) {
        return (
            <div className={navbar ? `${styles.container} ${styles.container_active}` : `${styles.container}`}>
                <div className={styles.burger}>
                    <div className={styles.title_container}>
                        <div className={styles.logo}></div>
                        <h2 className={styles.title}>DRAMA</h2>
                    </div>
                    <img src='./img/more.png' onClick={() => setNavbarVisability(!navbarVisability)}/>
                </div>
                <div className={navbarVisability ? `${styles.nav_menu_active}` : `${styles.nav_menu}`}>
                    <NavMenu style={{
                        'flexDirection': 'column',
                        'width': '100%',
                        'backgroundColor': 'black',
                        'zIndex': '200'
                    }}/>
                </div>
                <div className={navbarVisability ? `${styles.blur_active}` : `${styles.blur}`}
                    onClick={() => setNavbarVisability(false)}
                ></div>
            </div>
        )
    }

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