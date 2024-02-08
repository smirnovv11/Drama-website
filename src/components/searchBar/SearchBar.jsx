import styles from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input className={styles.textbox} type='text' placeholder='Search'></input>
            <button className={styles.search_btn}>
                <img src='./img/search.png'/>
            </button>
        </div>
    )
}

export default SearchBar