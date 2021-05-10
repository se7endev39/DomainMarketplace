import { useEffect, useState } from 'react'
import SearchItem from '../SearchItem'
import styles from './index.module.scss'

const db_fake = [
  ".admin",
  ".crypto",
  ".media",
  ".metrix",
]

const SearchResult = ({query}) => {
  const [results, setResults] = useState([]) 

  useEffect(() => {
    if(!query){
      setResults([])
      return
    }
    setResults(
      db_fake.map(ext => 
        ({
          domain: query + ext,
          price: "$50",
          status: "Available",
        })
    ))
  }, [query])
  return (
    <div className="pt-4 pb-4 px-4">
      {
        results.map( (domain, index) => (
          <SearchItem {...domain}/>
        ))
      }
    </div>
  )
}

export default SearchResult