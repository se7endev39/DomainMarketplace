import React from 'react'
import CartList from 'containers/cart/CartList'
import styles from './index.module.scss'
import Due from '../../containers/cart/Due'

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

function Cart() {
  
  return (
    <div className="px-4 pt-8">
      <div className={styles.title}>
        Your Cart
      </div>
      <div className={styles.count}>
        2 items
      </div>
      <div className="flex flex-col md:flex-row">
        <CartList cart_list={db_fake}/> 
        <Due total={200}/>
      </div>
    </div>
  );
}

export default Cart;
