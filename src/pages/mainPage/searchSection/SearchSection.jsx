import Lottie from 'lottie-react'
import SearchBar from '../../../components/searchBar/SearchBar'
import styles from './SearchSection.module.css'
import animationData from '../../../assets/animations/sect.json'

const SearchSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.animation}>
                <Lottie animationData={animationData} />
            </div>
            <h2 className={styles.title}>SEARCH CONTENT YOU WANT</h2>
            <div className={styles.search_div}>
                <SearchBar width='100%' style={{margin: 0, width: '100%'}}/>
            </div>
        </div>
    )
}

export default SearchSection