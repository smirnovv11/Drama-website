import AnimatedDiv from '../../../components/animatedDiv/AnimatedDiv'
import styles from './NewFilms.module.css'

const NewFilms = () => {
    return (
        <div className={styles.container}>
            <h2>NEW FILMS</h2>
            <div className={styles.newfilms}>
                <AnimatedDiv>
                    <div className={styles.film}>
                        <img className={styles.film} src='./img/film.png'/>
                        <p className={styles.film_name}>Oppenheimer 18+</p>
                    </div>
                </AnimatedDiv>
                <AnimatedDiv>
                    <div className={styles.film}>
                        <img className={styles.film} src='./img/film2.png'/>
                        <p className={styles.film_name}>Killers of the Flower Moon 18+</p>
                    </div>
                </AnimatedDiv>
                <AnimatedDiv>
                    <div className={styles.film}>
                        <img className={styles.film} src='./img/film3.png'/>
                        <p className={styles.film_name}>Barbie 12+</p>
                    </div>
                </AnimatedDiv>
                <AnimatedDiv>
                    <div className={styles.film}>
                        <img className={styles.film} src='./img/film4.png'/>
                        <p className={styles.film_name}>Saltburn 18+</p>
                    </div>
                </AnimatedDiv>
            </div>
        </div>
    )
}

export default NewFilms