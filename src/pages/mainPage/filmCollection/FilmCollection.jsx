import AnimatedDiv from '../../../components/animatedDiv/AnimatedDiv'
import styles from './FilmCollection.module.css'

const FilmCollection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top_shadow}/>
            <div className={styles.bottom_shadow}/>
            <div className={styles.films_img}>
                <img className={styles.marquee} src='./img/films.png'/>
                <img className={styles.marquee} src='./img/films.png'/>
            </div>
            <h2>Drama's library collection</h2>
            <div className={styles.content}>
                <div className={styles.collection_count}>
                    <p className={styles.film_count}>10 000</p>
                    <p className={styles.par}>Films & series</p>
                </div>
                <AnimatedDiv duration='1' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'flex-end',
                    justifyContent: 'flex-end',
                    }}>
                    <div className={styles.advantages}>
                        <h3 className={styles.subtitle}>Huge collection:</h3>
                        <p className={styles.advantage}>Our website offers a huge film library that contains thousands of films and series.</p>
                        <h3 className={styles.subtitle}>Quick search:</h3>
                        <p className={styles.advantage}>Easy and quick search can help you to find content you're looking for.</p>
                        <h3 className={styles.subtitle}>Browse by categories:</h3>
                        <p className={styles.advantage}>A lot of different categories aid you to browse more and more accurate.</p>
                    </div>
                </AnimatedDiv>
            </div>
        </div>
    )
}

export default FilmCollection