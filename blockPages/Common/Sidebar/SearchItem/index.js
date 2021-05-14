import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'
import { cartActions } from '_actions'
import { useDispatch } from 'react-redux'

const SearchItem = ({domain, price, status}) => {
  const dispatch = useDispatch()

  const onAddCart = () => {
    dispatch( cartActions.add({domain, price}) )
  }

  const cancelBuy = () => {
    dispatch( cartActions.remove(domain))
  }

  return (
    <div className={styles.SearchItem + " mt-2 flex justify-between items-center"}>
      <div className={styles.domain + " pl-3"}>
        {domain}
      </div>
      <div className={styles.info + " flex justify-between items-center"}>
        <div className={"pr-2 " + (price?styles.price:styles.unavailable)}>{price ? `$${price}`: "Unavailable"}</div>
        <div>
          {
            status == "Available" &&
            <MDBBtn color="primary" onClick={onAddCart} className={styles.btn}>
              <MDBIcon icon="cart-plus pr-2"/>
              Add to cart
            </MDBBtn>
          }
          {
            status == "Cart" && 
            <MDBBtn color="red" onClick={cancelBuy} className={styles.btn}>
              <MDBIcon icon="trash pr-2"/>
              cancel buy
            </MDBBtn>
          }
        </div>
        <div className={"pr-4 pl-2 " + styles.detail}>
          <MDBIcon icon="angle-down"/>
        </div>
      </div>
    </div>
  )
}

export default SearchItem