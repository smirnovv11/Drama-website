import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.shadow}/>
            <div className={styles.content}>
                    <img src='./img/logo.png'/>
                    <p>"Black Swan" 16+</p>
                    <div className={styles.raiting}>
                        <div className={styles.rate}>
                            <img src='./img/KP.png'/>
                            <p>7.7</p>
                        </div>
                        <div className={styles.rate}>
                            <img src='./img/IMDb.png'/>
                            <p>8.0</p>
                        </div>
                        <p>Drama, Thriller</p>
                    </div>
                    <p>Nina is a talented but unstable ballerina on the verge of stardom. 
                        Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.</p>
                    <div className={styles.short_info}>
                        <p>103 min.</p>
                        <p>&nbsp;/&nbsp;</p>
                        <p>2010 y.</p>
                    </div>
            </div>
        </div>
    )
}

export default Banner