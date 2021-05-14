import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'
import { salesActions } from '_actions'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { useState } from 'react'

const SalesItem = ({name:domain, price:price_old, status}) => {
  const dispatch = useDispatch()
  
  const changePrice = () => {
    dispatch( salesActions.changePrice({ domain, price: price}) )
  }
  
  const setHold = (flag) => {
    dispatch( salesActions.setHold({domain, status: flag ? "Hold" : "Taken"}) )
  }

  const [price, setPrice] = useState(price_old)
  return (
    <div className={"mt-3 items-center flex justify-between " + styles.CartItem}>
      <div className={styles.domain + " pl-3"}>{domain}</div>
      <div className="flex items-center">
        <div className={classnames(styles.input, "text-lg px-2 py-1")}>
          USD <input className={classnames( styles.price, "text-lg w-32 pl-2" )} value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
          <MDBBtn color="dark" onClick={changePrice}>
            Save
          </MDBBtn>
        </div>
        <div>
          <MDBBtn color="dark" onClick={() => setHold( status != "Hold" )}>
            { status == "Hold" ? "Sell" : "Hold" }
          </MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default SalesItem