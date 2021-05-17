import styles from './index.module.scss'
import {MDBBtn, MDBIcon} from 'mdbreact'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const SearchBar = ({onChange, query}) => {
  const router = useRouter()
  const input = useRef()

  const onQueryChange = evt => {
    onChange(evt.target.value)
  }

  useEffect(() => {
    input.current.focus()
  }, [router.pathname, router.query])

  return (
    <div className={"flex flex-start px-4"}>
      <input ref={input} placeholder="Search Domains" className={styles.search_input} onChange={onQueryChange} value={query}/>
      <MDBBtn className={"btn-blue " + styles.search_btn}>
        <MDBIcon icon="search" className={styles.search_icon}/>
        Search
      </MDBBtn>
    </div>
  )
}

export default SearchBar