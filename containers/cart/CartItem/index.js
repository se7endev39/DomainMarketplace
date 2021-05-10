import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'

const CartItem = ({domain, price}) => {
  return (
    <div className={"mt-3 pt-3 flex justify-between " + styles.CartItem}>
      <div className={styles.domain + " pl-3"}>{domain}</div>
      <div className="flex flex-col text-center pr-3">
        <div className={styles.price}>${price}</div>
        <div>
          <MDBBtn outline className="btn-noborder" color="primary">
            <MDBIcon icon="trash"/>
          </MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default CartItem