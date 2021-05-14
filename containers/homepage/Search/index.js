import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import SearchResult from '../SearchResult'
import styles from './index.module.scss'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { searchActions } from '_actions'

const Search = () => {
  
  const router = useRouter()
  const dispatch = useDispatch()

  const result = useSelector( state => state.search )
  const [query, setQuery] = useState("")
  //
  useEffect(() => {
    router.replace({
      pathname: "/search",
      query: {q: query}
    })
    if(query)
      dispatch( searchActions.search(query) )
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
      <SearchBar onChange={setQuery} query={query} />
      <SearchResult query={query} result={result} />
    </div>
  )
}

export default Search