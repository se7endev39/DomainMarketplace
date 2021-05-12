import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'
import { cartActions } from '_actions'
import { useDispatch } from 'react-redux'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import classnames from 'classnames';
import { useState } from 'react';

const price_list = [
  [50, "1 year 50$ (no discount)"], 
  [45, "6 months 45$ (10% discount)"],
  [40, "3 months 40$ (20% discount)"],
  [30, "1 months 30$ (40% discount)"],
]

const CartItem = ({domain}) => {
  const dispatch = useDispatch()
  const deleteItem = () => {
    dispatch( cartActions.remove(domain) )
  }
  const [price, setPrice] = useState(0)
  return (
    <div className={"py-2 flex justify-between items-center " + styles.CartItem}>
      <div className={styles.domain}>{domain}</div>
      <div className="text-center pr-3 flex items-center">
        <div className={classnames(styles.price, "items-center")}>
          <MDBDropdown>
            <MDBDropdownToggle caret color="dark">
              {price_list[price][1]}
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              {
                price_list.map( ([price, text], i) => (
                  <MDBDropdownItem onClick={() => {setPrice(i)}}>
                    {text}
                  </MDBDropdownItem>
                ))
              }
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <MDBIcon icon="trash" className="pl-2 cursor-pointer" onClick={deleteItem}/>
      </div>
    </div>
  )
}

export default CartItem