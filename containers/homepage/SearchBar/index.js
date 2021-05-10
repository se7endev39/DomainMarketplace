import styles from './index.module.scss'
import {MDBBtn, MDBIcon} from 'mdbreact'
import { useState } from 'react'

const SearchBar = ({onChange}) => {
  const onQueryChange = evt => {
    onChange(evt.target.value)
  }

  return (
    <div className={"flex flex-start px-4"}>
      <input placeholder="Search Domains" className={styles.search_input} onChange={onQueryChange}/>
      <MDBBtn className={"btn-blue " + styles.search_btn}>
        <MDBIcon icon="search" className={styles.search_icon}/>
        Search
      </MDBBtn>
    </div>
  )
}

export default SearchBar