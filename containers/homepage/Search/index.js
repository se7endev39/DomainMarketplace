import SearchBar from '../SearchBar'
import styles from './index.module.scss'

const Search = () => {
  return (
    <div className="pt-12 pb-4 px-2">
      <div className={styles.title + " pb-8"}>
        Buy or Sell Domain Names
      </div>
      <SearchBar />
    </div>
  )
}

export default Search