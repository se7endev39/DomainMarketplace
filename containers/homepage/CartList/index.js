import CartItem from '../CartItem'
import styles from './index.module.scss'
import classnames from 'classnames'
import {MDBBtn} from 'mdbreact'
import Link from 'next/link'
import { useRouter } from 'next/router'


const CartList = ({cart_list}) => {
  const router = useRouter()
  return (
    <div className={classnames("pt-2 pb-4 px-4", styles.Cart)}>
      <div className={styles.title}>Your Cart</div>
      <div className={classnames("pl-2", styles.count)}>4 items</div>
      {
        cart_list.length > 0 &&
        <div>
          {  
            cart_list?.map((item, i) => (
              <CartItem key={i} {...item}/>
            ))
          }
          <div className="flex justify-between py-2">
            <div className="text-xl font-bold">Order Total</div>
            <div className="text-lg font-bold">$400</div>
          </div>
          <MDBBtn color="primary" className="w-full mx-0 mt-0 text-base" onClick={() => {router.push("/cart")}}>
            Go To Cart
          </MDBBtn>
        </div>
      }
    </div>
  )
}

export default CartList