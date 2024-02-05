import styles from './MainPage.module.css'
import Banner from './banner/Banner'
import NewFilms from './newFilms/NewFilms'

const MainPage = () => {
    return (
        <div>
            <Banner/>
            <NewFilms/>
        </div>
    )
}

export default MainPage