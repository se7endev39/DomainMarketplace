import React from 'react'
import styles from './index.module.scss'

function Cart() {
  
  return (
    <div className="px-4 pt-8">
      <div className={styles.title}>
        Your Cart
      </div>
      <div className={styles.count}>
        2 items
      </div>
      
    </div>
  );
}

export default Cart;
