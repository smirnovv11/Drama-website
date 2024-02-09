import NavMenu from '../navMenu/NavMenu'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navigation_info_div}>
                <div className={styles.info_div}>
                    <div className={styles.title_container}>
                        <div className={styles.logo}></div>
                        <h2 className={styles.title}>DRAMA</h2>
                    </div>
                    <p className={styles.description}>Unlimited collection of blockbusters, classic masterpieces and other titles.</p>
                </div>
                <div className={styles.navigation_div}>
                    <div className={styles.social}>
                        <a href='https://web.telegram.org/a/' target='blank'><img src='./img/telegram.svg'/></a>
                        <a href='https://vk.com/' target='blank'><img src='./img/VK.svg'/></a>
                        <a href='https://twitter.com/' target='blank'><img src='./img/twitter.svg'/></a>
                    </div>
                    <NavMenu/>
                </div>
            </div>
            <hr className={styles.line}/>
            <p className={styles.bottom_info}>Made by Danila Smirovv / 2024 y.</p>
        </div>
    )
}

export default Footer