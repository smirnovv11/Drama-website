import styles from './SearchBar.module.css'

const SearchBar = (props) => {
    return (
        <div className={styles.container} style={props.style}>
            <input value={props.value} onChange={props.onChange} className={styles.textbox} type='text' placeholder='Search' style={{width: props.width}}></input>
            <button className={styles.search_btn}>
                <img src='./img/search.png'/>
            </button>
        </div>
    )
}

export default SearchBar