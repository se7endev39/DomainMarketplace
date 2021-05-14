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
]

const SearchResult = ({query, result}) => {
  const [results, setResults] = useState([]) 
  const cart_list = useSelector((state) => state.cart.cart);

  useEffect(_.debounce(() => {
    if(!query){
      setResults([])
      return
    }
    setResults(
      db_fake.map(ext => {
        const domain = query + ext
        const domain_db = result.find( each => each.name == domain )
        const cart = cart_list.find((item) => item.domain == domain)
        let status = "Available"
        if( cart ) status = "Cart"
        let price = 50
        if( domain_db ) {
          price = domain_db.price
          status = domain_db.status
          console.log(domain_db)
        }
        return {
          domain,
          price,
          status
        }  
      }
    ))
  }, 150), [query, cart_list])
  return (
    <div className="pt-4 pb-4 px-4 flex flex-col lg:flex-row">
      <div className="flex-grow lg:mr-4">
      {
        results.map( (domain, index) => (
          <SearchItem key={index} {...domain}/>
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