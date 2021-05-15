import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { salesActions } from '_actions'
import { useDispatch, useSelector } from 'react-redux'
import SalesList from 'containers/sales/SalesList'
import classNames from 'classnames'

function Sales() {
  const dispatch = useDispatch()
  const sales_list = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch( salesActions.get() )
  }, [])

  
  return (
    <div className={classNames("px-4 pt-8", styles.Sales)}>
      <div className={styles.title}>
        Sales List
      </div>
      <div className={styles.count}>
        {sales_list.length} items, total price ${sales_list.map(each => each.price).reduce((a,b) => a+b, 0)}
      </div>
      <div className="flex">
        <SalesList sales_list={sales_list}/> 
      </div>
    </div>
  );
}

export default Sales;
