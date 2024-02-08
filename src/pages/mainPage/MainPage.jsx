import styles from './MainPage.module.css'
import Banner from './banner/Banner'
import FilmCollection from './filmCollection/FilmCollection'
import NewFilms from './newFilms/NewFilms'

const MainPage = () => {
    return (
        <div>
            <Banner/>
            <NewFilms/>
            <FilmCollection/>
        </div>
    )
}

export default MainPage