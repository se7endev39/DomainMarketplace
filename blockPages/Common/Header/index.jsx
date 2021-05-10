import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Logo from "assets/images/logo.svg";
import Menu_icon from "assets/images/menu.svg";
import Cross_icon from 'assets/images/cross_1.svg'
import Menu from '../Menu'
import styles from './index.module.scss'

const Header = (props) => {

  const [pageName, setPageName] = useState("");
  const [menuOpened, setMenuOpened] = useState(false)

  let toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <nav className={"top-nav " + (menuOpened ? styles.openedMenu : "")}>
      <div className="flex items-start xl:items-center justify-between ">
        <div className="flex relative nav-logo">
          <Link href="/"><img className="cursor-pointer logo" src={Logo} alt="Logo" /></Link>
        </div>
        <div className="flex items-end self-center" onClick={toggleMenu}>
          <img className="cursor-pointer" src={ menuOpened ? Cross_icon :Menu_icon} alt="Menu" />
        </div>
      </div>
      { menuOpened && <Menu onMenuClicked={toggleMenu}/> }
    </nav>
  );
}

export default Header