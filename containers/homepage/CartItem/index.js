import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'
import { cartActions } from '_actions'
import { useDispatch } from 'react-redux'

const CartItem = ({domain, price}) => {
  const dispatch = useDispatch()
  const deleteItem = () => {
    dispatch( cartActions.remove(domain) )
  }
  return (
    <div className={"py-2 flex justify-between " + styles.CartItem}>
      <div className={styles.domain}>{domain}</div>
      <div className="text-center pr-3 flex items-center">
        <div className={styles.price}>${price}</div>
        <MDBIcon icon="trash" className="pl-2" onClick={deleteItem}/>
      </div>
    </div>
  )
}

export default CartItem