import styles from './index.module.scss'
import {MDBBtn, MDBIcon} from 'mdbreact'

const SearchBar = () => {
  return (
    <div className={"flex flex-start"}>
      <input placeholder="Search Domains" className={styles.search_input}/>
      <MDBBtn>
        <MDBIcon icon="search" className={styles.search_icon}/>
        Search
      </MDBBtn>
    </div>
  )
}

export default SearchBar