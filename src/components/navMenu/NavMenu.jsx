import { Link } from 'react-router-dom'
import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <div className={styles.container}>
            <button className={styles.nav_btn} to='home'>Home</button>
            <button className={styles.nav_btn} to='films'>Films</button>
            <button className={styles.nav_btn} to='series'>Series</button>
            <button className={styles.nav_btn} to='about'>About</button>
        </div>
    )
}

export default NavMenu