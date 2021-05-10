import { useState } from 'react'
import SearchBar from '../SearchBar'
import SearchResult from '../SearchResult'
import styles from './index.module.scss'
import _ from 'lodash'

const Search = () => {
  const [query, setQuery] = useState("")
  const onQueryChange = _.debounce(setQuery, 200)

  return (
    <div className="pt-12 pb-4 px-2">
      <div className={styles.title + " pb-8"}>
        Buy or Sell Domain Names
      </div>
      <SearchBar onChange={onQueryChange}/>
      <SearchResult query={query}/>
    </div>
  )
}

export default Search