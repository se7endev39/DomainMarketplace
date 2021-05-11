import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "components/nav-search";
import styles from './index.module.scss';
import {MDBBtn, MDBIcon} from 'mdbreact'
import Link from 'next/link'
import IconButton from 'components/IconButton'

const Header = (props) => {
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
      <nav className="flex-wrap top-nav px-1 py-1">
        <div className="flex items-start items-center justify-between  lg:px-4">
          <div className="flex items-start justify-start">
            <MDBBtn floating="true" style={{borderRadius: "50%"}} className={styles.hamburger} outline={true} color="primary">
              <MDBIcon icon="bars" />
            </MDBBtn>
          </div>
          <div className={`hidden flex-grow ${pageName ? 'xl:flex' : 'nav-home'} nav-links pl-2 ` + styles.title}>
            <Link href="/" className="cursor-pointer">
              Metrix Address
            </Link>
          </div>
          <div className="flex items-end items-center">
            <SearchBox inNav={true} />
            <Link href="/cart">
              <IconButton>
                <MDBIcon icon="shopping-cart" style={{fontSize:"1rem"}}/>
              </IconButton>
            </Link>
            <Link href="/auth">
              <MDBBtn color="primary" className="px-3 py-2 text-base">
                <MDBIcon icon="lock" className="pr-2"/>
                Sign In / Sign Up
              </MDBBtn>
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Header