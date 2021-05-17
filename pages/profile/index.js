import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { salesActions } from '_actions'
import { useDispatch, useSelector } from 'react-redux'
import SalesList from 'containers/sales/SalesList'
import classNames from 'classnames'
import Link from 'next/link'
import DomainList from 'containers/profile/DomainList'

function Profile() {
  const email = useSelector( state => state.auth.email )
  const dispatch = useDispatch()
  const sales_list = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch( salesActions.get() )
  }, [])

  
  return (
    <div className={classNames("px-4 pt-8", styles.Sales)}>
      <div className={styles.title}>
        My Profile
      </div>
      <div className="text-2xl font-bold pt-4 flex">
        My email address: <div className="pl-4">{email}</div>
      </div>
      <div className="pt-2">
        <Link href="change-email">
          Change Email Address
        </Link>
      </div>
      <div className="pt-1">
        <Link href="reset-password">
          Reset Password
        </Link>
      </div>
      <div className="text-2xl font-bold pt-4">
        My domains
      </div>
      <div className="pt-1">
        <Link href="/sales">
          Go to SalesList
        </Link>
      </div>
      <div className={styles.count}>
        {sales_list.length} items, total price ${sales_list.map(each => each.price).reduce((a,b) => a+b, 0)}
      </div>
      <div className="flex">
        <DomainList sales_list={sales_list}/> 
      </div>
    </div>
  );
}

export default Profile;
