import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { NAV_LINK_CLASS } from "../utils/constants";
import SearchBox from "../components/nav-search.js";
import Logo from "../assets/images/logo-w.png";

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
    <nav className="flex-wrap top-nav bg-primary">
      <div className="flex items-start xl:items-center justify-between ">
        <div className="flex relative nav-logo">
          <Link href="/"><img className="cursor-pointer" src={Logo} alt="Logo" /></Link>
        </div>
        <div className={`hidden flex-grow ${pageName ? '2xl:flex' : 'nav-home'} nav-links`}>
          <Link href="/about"><a className={NAV_LINK_CLASS}>About</a></Link>
          <Link href="/mysourcer"><a className={NAV_LINK_CLASS}>My Sourcer</a></Link>
          <Link href="/contribute"><a className={NAV_LINK_CLASS}>Contribute</a></Link>
          <Link href="/how-it-works"><a className={NAV_LINK_CLASS}>How it works</a></Link>
        </div>

        <div className="flex nav-search-container items-center">
          {shouldHaveSearch && <div className="hidden xl:block"><SearchBox inNav={true} /></div>}
          {loggedIn ? (
            <div>
              <Link href="/logout"><a className={NAV_LINK_CLASS}>Logout</a></Link>
            </div>
          ) : (
            <div>
              <Link href="/login#register"><button className="nav-register rounded-full bg-white font-bold color-primary focus:outline-none hover-shadow">Register</button></Link>
              <Link href="/login#login"><button className="nav-login rounded-full font-bold focus:outline-none hover-shadow">Login</button></Link>
            </div>
          )}
        </div>
      </div>
      <div className="block xl:hidden">
        {shouldHaveSearch && <SearchBox inNav={true} />}
      </div>
    </nav>
  );
}