import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import _ from 'lodash'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const signed = useSelector(state => state.auth.signed)
  
  return (
    <div className="h-full top-0">
      Sidebar
    </div>
  )
}

export default Sidebar