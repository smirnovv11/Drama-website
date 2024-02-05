import styles from './NewFilms.module.css'

const NewFilms = () => {
    return (
        <div className={styles.container}>
            <h2>NEW FILMS</h2>
            <div className={styles.newfilms}>
                <img className={styles.film} src='./img/film.png'/>
                <img className={styles.film} src='./img/film.png'/>
                <img className={styles.film} src='./img/film.png'/>
                <img  className={styles.film} src='./img/film.png'/>
            </div>
        </div>
    )
}

export default NewFilms