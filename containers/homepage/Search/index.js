import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import SearchResult from '../SearchResult'
import styles from './index.module.scss'
import _ from 'lodash'
import { useRouter } from 'next/router'

const Search = () => {
  const [query, setQuery] = useState("")

  const router = useRouter()
  //
  useEffect(() => {
    router.replace({
      pathname: "/search",
      query: {q: query}
    })
  }, [query])

  useEffect(() => {
    if(!router.query.q) return
    if(query == router.query.q) return
    setQuery(router.query.q)
  }, [router.query.q])

  return (
    <div className="pt-12 pb-4 px-2">
      <div className={styles.title + " pb-8"}>
        Buy or Sell Domain Names
      </div>
      <SearchBar onChange={setQuery} query={query}/>
      <SearchResult query={query}/>
    </div>
  )
}

export default Search