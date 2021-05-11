import { useEffect, useState } from 'react'
import CartList from '../CartList'
import SearchItem from '../SearchItem'
import styles from './index.module.scss'
import _ from 'lodash'

const db_fake = [
  ".admin",
  ".crypto",
  ".media",
  ".metrix",
]

const cart_list_fake = [
  {
    domain: "cart.metrix",
    price: "50"
  },
  {
    domain: "cart.admin",
    price: "300"
  },
  {
    domain: "cart.media",
    price: "50"
  },
  {
    domain: "test.metrix",
    price: "50"
  },
]

const SearchResult = ({query}) => {
  const [results, setResults] = useState([]) 

  useEffect(_.debounce(() => {
    if(!query){
      setResults([])
      return
    }
    setResults(
      db_fake.map(ext => 
        ({
          domain: query + ext,
          price: "50",
          status: "Available",
        })
    ))
  }, 150), [query])
  return (
    <div className="pt-4 pb-4 px-4 flex">
      <div className="flex-grow mr-4">
      {
        results.map( (domain, index) => (
          <SearchItem key={index} {...domain}/>
        ))
      }
      </div>
      {
        results.length > 0 && 
        <CartList cart_list={cart_list_fake}/>
      }
    </div>
  )
}

export default SearchResult