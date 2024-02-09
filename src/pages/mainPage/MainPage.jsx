import styles from './MainPage.module.css'
import Banner from './banner/Banner'
import FilmCollection from './filmCollection/FilmCollection'
import NewFilms from './newFilms/NewFilms'
import SearchSection from './searchSection/SearchSection'

const MainPage = () => {
    return (
        <div>
            <Banner/>
            <NewFilms/>
            <FilmCollection/>
            <SearchSection/>
        </div>
    )
}

export default MainPage