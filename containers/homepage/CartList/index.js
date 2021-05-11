import CartItem from '../CartItem'
import styles from './index.module.scss'
import classnames from 'classnames'


const CartList = ({cart_list}) => {
  return (
    <div className={classnames("pt-2 pb-4 px-4", styles.Cart)}>
      <div className={styles.title}>Your Cart</div>
      <div className={classnames("pl-2", styles.count)}>4 items</div>
      {
        cart_list?.map((item, i) => (
          <CartItem key={i} {...item}/>
        ))
      }
    </div>
  )
}

export default CartList