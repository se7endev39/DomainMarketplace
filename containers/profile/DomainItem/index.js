import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'
import { salesActions } from '_actions'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { useState } from 'react'

const DomainItem = ({name:domain, price:price_old, status}) => {
  const dispatch = useDispatch()
  
  const changePrice = () => {
    dispatch( salesActions.changePrice({ domain, price: price}) )
  }
  
  const setHold = (flag) => {
    dispatch( salesActions.setHold({domain, status: flag ? "Hold" : "Taken"}) )
  }

  const [price, setPrice] = useState(price_old)
  return (
    <div className={classnames("py-2 items-center flex justify-between", styles.domainItem)}>
      <div className={styles.domain + " pl-3"}>{domain}</div>
      <div className="flex items-center">
        <div className={classnames("text-lg px-2 py-1")}>
          USD {price}
        </div>
        <div className="px-4">
          {status == "HOLD"? "Hold" : "Sale"}
        </div>
      </div>
    </div>
  )
}

export default DomainItem