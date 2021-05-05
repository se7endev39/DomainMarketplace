import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { NAV_LINK_CLASS } from "../utils/constants";
import SearchBox from "../components/nav-search.js";
import Logo from "../assets/images/logo.svg";
import More from "../assets/images/more.svg";

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
    <nav className="flex-wrap top-nav">
      <div className="flex items-start xl:items-center justify-between ">
        <div className="flex relative nav-logo">
          <Link href="/"><img className="cursor-pointer logo" src={Logo} alt="Logo" /></Link>
        </div>
        <div className="flex items-end dropdown-btn"><img className="cursor-pointer" src={More} alt="More" /></div>
      </div>
    </nav>
  );
}