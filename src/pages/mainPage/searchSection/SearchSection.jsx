import Lottie from 'lottie-react'
import SearchBar from '../../../components/searchBar/SearchBar'
import styles from './SearchSection.module.css'
import animationData from '../../../assets/animations/sect.json'
import Button from '../../../components/button/Button'
import { useState } from 'react'

const SearchSection = () => {

    const [searchLine, setLine] = useState(null)

    const onValueChange = () => {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.animation}>
                <Lottie animationData={animationData} />
            </div>
            <h2 className={styles.title}>SEARCH CONTENT YOU WANT</h2>
            <div className={styles.search_div}>
                <SearchBar value={searchLine} width='100%' style={{margin: 0, width: '100%'}}/>
                <Button style={{alignSelf: 'flex-end'}}>Clear search</Button>
            </div>
        </div>
    )
}

export default SearchSection