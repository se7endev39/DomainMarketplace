import React, { useEffect } from 'react'

import CartList from 'containers/cart/CartList'
import styles from './index.module.scss'
import Due from '../../containers/cart/Due'
import { cartActions } from '_actions'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'


function Cart() {
  const dispatch = useDispatch()
  const cart_list = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch( cartActions.get() )
  }, [])
  
  return (
    <div className={classnames(styles.Cart, "px-4 pt-8")}>
      <div className={styles.title}>
        Your Cart
      </div>
        {
          cart_list.length > 0 &&
           <div className={styles.count}>
            {cart_list.length} items
          </div>  
        }
      <div className="flex flex-col md:flex-row">
        <CartList cart_list={cart_list}/> 
        <Due total={200}/>
      </div>
    </div>
  );
}

export default Cart;
