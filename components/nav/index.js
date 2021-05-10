import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { NAV_LINK_CLASS } from "../../utils/constants";
import SearchBox from "../nav-search";
import Logo from "assets/images/logo.svg";
import styles from './index.module.scss';
import {MDBBtn, MDBIcon} from 'mdbreact'

export const Nav = (props) => {
  const [pageName, setPageName] = useState("");
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const shouldHaveSearch = !props.noSearch;

  useEffect(() => {
    var path = window.location.pathname;
    var pn = path.split("/").pop();
    setPageName(pn);
  })
  if (process.browser) {
  }

  return (
    <header className={styles.header}>
      <nav className="flex-wrap top-nav bg-white px-1 py-1">
        <div className="flex items-start xl:items-center justify-between ">
          <div className="flex items-start justify-start">
            <MDBBtn floating gradient="purple" style={{borderRadius: "50%"}} className={styles.hamburger}>
              <MDBIcon icon="bars" />
            </MDBBtn>
            {/* <div className="flex relative nav-logo">
              <Link href="/"><img className={classnames("cursor-pointer", styles.Logo)} src={Logo} alt="Logo" /></Link>
            </div> */}
          </div>
          <div className={`hidden flex-grow ${pageName ? '2xl:flex' : 'nav-home'} nav-links`}>
            Metrix Address
          </div>
          <div className="flex items-end items-center">
            <SearchBox inNav={true} />
            <MDBIcon icon="shopping-cart" className="mr-4"/>
          </div>
        </div>

      </nav>
    </header>
  );
}