import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'

const CartItem = ({domain, price}) => {
  return (
    <div className={"py-2 flex justify-between " + styles.CartItem}>
      <div className={styles.domain}>{domain}</div>
      <div className="text-center pr-3 flex items-center">
        <div className={styles.price}>${price}</div>
        <MDBIcon icon="trash" className="pl-2"/>
      </div>
    </div>
  )
}

export default CartItem