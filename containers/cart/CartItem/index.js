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
    <div className={"mt-3 pt-3 flex justify-between " + styles.CartItem}>
      <div className={styles.domain + " pl-3"}>{domain}</div>
      <div className="flex flex-col text-center pr-3">
        <div className={styles.price}>${price}</div>
        <div>
          <MDBBtn outline className="btn-noborder" color="primary" onClick={deleteItem}>
            <MDBIcon icon="trash"/>
          </MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default CartItem