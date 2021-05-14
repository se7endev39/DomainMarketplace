import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import styles from './index.module.scss'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { MDBIcon } from 'mdbreact'
import Link from 'next/link'

const sidebar_menu = [
  {name:"Profile Settings", href:"/search"},
  {name:"My Watchlist", href:"/search"},
  {name:"Search domains", href:"/search"},
  {name:"Transaction history", href:"/search"},
  {name:"Credits", href:"/search"},
]

const Sidebar = (props, ref) => {
  const signed = useSelector(state => state.auth.signed)
  const [ opened, setOpened ] = useState(false)

  useImperativeHandle(ref, () => ({
    openSidebar: () => {
      setOpened(true)
    }
  }));

  return (
    <div className={classnames( styles.Sidebar, "h-full top-0 flex flex-col" , !opened? "hidden": "")}>
      {
        sidebar_menu.map(({name, href}, index) => (
          <div key={index} className="px-4 pt-3 text-lg font-bold cursor-pointer"  onClick={() => setOpened(false)}>
            <Link href={href}>
              {name}
            </Link>
          </div>
        ))
      }
      <div className={styles.close} onClick={() => setOpened(false)}>
        <MDBIcon icon="times" color="red" className="text-2xl"/>
      </div>
    </div>
  )
}

export default forwardRef(Sidebar)