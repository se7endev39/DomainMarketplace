import CartItem from '../CartItem'
import styles from './index.module.scss'

const db_fake = [
  {
    domain: "cart.metrix",
    price: "50"
  },
  {
    domain: "cart.admin",
    price: "300"
  },
  {
    domain: "cart.media",
    price: "50"
  },
  {
    domain: "test.metrix",
    price: "50"
  },
]

const CartList = () => {
  return (
    <div className="pt-2">
      {
        db_fake.map((item, i) => (
          <CartItem key={i} {...item}/>
        ))
      }
    </div>
  )
}

export default CartList