import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'

const SearchItem = ({domain, price, status}) => {
  return (
    <div className={styles.SearchItem + " mt-2 flex justify-between items-center"}>
      <div className={styles.domain + " pl-3"}>
        {domain}
      </div>
      <div className={styles.info + " flex justify-between items-center"}>
        <div className={"pr-2 " + (price?styles.price:styles.unavailable)}>{price ? price: "Unavailable"}</div>
        <div className={styles.cart}>
          <MDBBtn color="primary">
            <MDBIcon icon="cart-plus"/>
            Add to cart
          </MDBBtn>
        </div>
        <div className={"pr-4 pl-2 " + styles.detail}>
          <MDBIcon icon="angle-down"/>
        </div>
      </div>
    </div>
  )
}

export default SearchItem