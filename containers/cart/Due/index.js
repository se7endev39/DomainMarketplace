import { MDBBtn } from 'mdbreact'
import styles from './index.module.scss'
import classnames from 'classnames'

const Due = ({total}) => {
  return (
    <div className={classnames(styles.Due, "py-2 px-4 mt-4 pb-4 md:ml-8")}>
      <div className={classnames(styles.title, "flex justify-between px-2 pt-4")}>
        <div>
          Total Due
        </div>
        <div>
          ${total}
        </div>
      </div>
      <div className="pt-2">
        <MDBBtn color="primary" className="w-full mx-0 mt-0 text-base">CHECKOUT</MDBBtn>
      </div>
    </div>
  )
}

export default Due