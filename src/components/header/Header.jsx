import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <div className={styles.logo}></div>
                <h2 className={styles.title}>DRAMA</h2>
            </div>
        </div>
    )
}

export default Header