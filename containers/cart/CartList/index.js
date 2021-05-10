import CartItem from '../CartItem'
import styles from './index.module.scss'

const CartList = ({cart_list}) => {
  return (
    <div className="pt-2 flex-grow">
      {
        cart_list?.map((item, i) => (
          <CartItem key={i} {...item}/>
        ))
      }
    </div>
  )
}

export default CartList