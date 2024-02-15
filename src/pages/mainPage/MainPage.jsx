import styles from './MainPage.module.css'
import { lazy } from 'react'

const Banner = lazy(() => import('./banner/Banner'))
const NewFilms = lazy(() => import('./newFilms/NewFilms'))
const FilmCollection = lazy(() => import('./filmCollection/FilmCollection'))
const SearchSection = lazy(() => import('./searchSection/SearchSection'))

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