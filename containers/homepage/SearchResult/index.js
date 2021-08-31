import { useEffect, useState } from 'react'
import CartList from '../CartList'
import SearchItem from '../SearchItem'
import styles from './index.module.scss'
import _ from 'lodash'
import { useSelector } from 'react-redux'

const db_fake = [
  "",
  "admin",
  "crypto",
  "media",
  "metrix",
  "wallet",
  "money",
  "coins",
  "change",
  "pennies",
  "metroid",
  "storage",
  "purse",
  "piggybank",
  "chest",
  "coffer",
  "trunk",
  "box",
  "hoard",
  "secure",
  "safe",
  "lock",
  "storeroom",
  "security",
  "yreasure",
  "yrove",
  "dosh",
  "coinage",
  "dough",
  "currency",
  "cash",
  "wealth",
  "capital",
  "stock",
  "funds",
  "riches",
  "wages",
  "storage"
]

const SearchResult = ({query, result}) => {
  const [results, setResults] = useState([]) 
  const [suggests, setSuggests] = useState([]) 
  const cart_list = useSelector((state) => state.cart.cart);

  useEffect(_.debounce(() => {
    if(!query){
      setResults([])
      return
    }
    const tags_suggest = db_fake.slice(4, db_fake.length)
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .slice(0, 2 + (Math.random() > 0.5))
    const tags_fixed = db_fake.slice(0, 4)
    const appendTag = ext => {
        const domain = query + ext
        const domain_db = result.find( each => each.name == domain )
        const cart = cart_list.find((item) => item.domain == domain)
        let status = "Available"
        let price = 50
        if( domain_db ) {
          price = domain_db.price
          status = domain_db.status
          console.log(domain_db)
        }
        if( cart ) status = "Cart"
        return {
          domain,
          price,
          status,
          user: domain_db?.user
        }  
      }
    setResults( tags_fixed.map(appendTag) )
    setSuggests( tags_suggest.map(appendTag) )
  }, 150), [query, cart_list, result])
  return (
    <div className="pt-4 pb-4 px-4 flex flex-col lg:flex-row">
      <div className="flex-grow lg:mr-4">
      {
        results.map( (domain, index) => (
          <SearchItem key={index} {...domain}/>
        ))
      }
      <div className="divider pt-4 font-bold text-lg">
        Suggestions
      </div>
      {
        suggests.map( (domain, index) => (
          <SearchItem key={results.length + index} {...domain}/>
        ))
      }
      </div>
      <div className="sm:mt-4 md:mt-4 lg:mt-0">
      {
        results.length > 0 && 
        <CartList/>
      }
      </div>
    </div>
  )
}

export default SearchResult