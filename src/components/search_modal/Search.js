import styles from './Search.module.scss';

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.test}>
                <form className={styles.searchFrame}>
                    <input className={styles.searchInput} type="text" placeholder='Search for keywords' name='search' autofocus='autofocus'></input>
                    <button className={styles.btnSubmit} type='submit'>
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
            {/* <div className={styles.modal}></div> */}
        </div>
    )
}

export default Search
