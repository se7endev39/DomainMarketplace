import { forwardRef, useEffect, useImperativeHandle, useState, useRef } from 'react'
import styles from './index.module.scss'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { MDBIcon } from 'mdbreact'
import Link from 'next/link'
import { authActions } from '_actions'

const sidebar_menu = [
  {name:"Profile Settings", href:"/profile", icon: "user-circle"},
  {name:"Search domains", href:"/search", icon: "search"},
  {name:"My Saleslist", href:"/sales", icon: "money-check-alt"},
  {name:"My Watchlist", href:"/search", icon: "bars"},
  {name:"Transaction history", href:"/search", icon: "history"},
  {name:"Credits", href:"/search", icon: "credit-card"},
  {name:"Mapping Table", href:"/mapping-table", icon: "table"},
]

const sign_pages = [
  "/profile",
  "/sales",  
]


const Sidebar = (props, ref) => {
  const dispatch = useDispatch()
  const signed = useSelector(state => state.auth.signed)
  const [ opened, setOpened ] = useState(false)
  const ref_sidebar = useRef()

  useImperativeHandle(ref, () => ({
    openSidebar: (e) => {
      e.preventDefault();
      setOpened(!opened)
      if(!opened){
        ref_sidebar.current.focus()
      }
    }
  }));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (opened && !ref_sidebar.current.contains(event.target)) {
        setOpened( false )
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [opened])


  return (
    <div className={classnames( styles.Sidebar, "h-full top-0 flex flex-col" , !opened? "hidden": "")} onBlur={() => setOpened(false)} ref={ref_sidebar}>
      {
        sidebar_menu.map(({name, href, icon}, index) => (
          <div key={index} className="flex px-4 pt-3 text-lg font-bold cursor-pointer"  onClick={() => setOpened(false)}>
            <div  style={{width: "40px"}}>
              <MDBIcon icon={icon} className="text-xl"/>
            </div>
            <Link href={signed || !sign_pages.includes(href)? href : "/auth/signin"}>
              {name}
            </Link>
          </div>
        ))
      }
      <div className="flex flex-grow"></div>

      <div className="flex px-4 pt-3 pb-8 text-lg font-bold cursor-pointer"  onClick={() => {setOpened(false); dispatch(authActions.signOut())}}> 
        <div style={{width: "40px"}}>
          <MDBIcon icon={"sign-out-alt"} className="text-xl"/>
        </div>
        <a>
          Sign out
        </a>
      </div>

      <div className={styles.close} onClick={() => setOpened(false)}>
        <MDBIcon icon="times" color="red" className="text-2xl"/>
      </div>
    </div>
  )
}

export default forwardRef(Sidebar)