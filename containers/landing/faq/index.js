import { MDBBtn, MDBIcon } from 'mdbreact'
import styles from './index.module.scss'
import { salesActions } from '_actions'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { useState } from 'react'

const Faq = ({question, answer}) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className={classnames(styles.faq, "mx-4 mt-4 pt-3")}>
      <div className={classnames("px-4 pt-2 text-xl text-left font-bold flex justify-between", styles.wrapper)}>
        <div>{question}</div>
        <div onClick = { () => setShowAnswer(!showAnswer)}>
          <MDBIcon icon={showAnswer?"angle-up":"angle-down"} className="cursor-pointer"/>
        </div>
      </div>
      {
        showAnswer &&
        <div className={classnames("text-lg px-8 pt-2 text-left ", styles.price)}>
          { answer }
        </div>
      }
    </div>
  )
}

export default Faq