import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.shadow}/>
            <div className={styles.content}>
                    <img src='./img/logo.png'/>
                    <p>"Черный лебедь" 16+</p>
                    <div className={styles.raiting}>
                        <div className={styles.rate}>
                            <img src='./img/KP.png'/>
                            <p>7.7</p>
                        </div>
                        <div className={styles.rate}>
                            <img src='./img/IMDb.png'/>
                            <p>8.0</p>
                        </div>
                        <p>Драма, триллер</p>
                    </div>
                    <p>У примы балетного театра неожиданно появляется опасная конкурентка, способная отобрать у неё все партии. 
                        Соперничество усиливается по мере приближения ответственного выступления.</p>
                    <div className={styles.short_info}>
                        <p>103 мин.</p>
                        <p>&nbsp;/&nbsp;</p>
                        <p>2010 г.</p>
                    </div>
            </div>
        </div>
    )
}

export default Banner