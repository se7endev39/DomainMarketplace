import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { NAV_LINK_CLASS } from "../utils/constants";

export const BottomNav = (props) => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    var path = window.location.pathname;
    var pn = path.split("/").pop();
    setPageName(pn);
  })

  return (
    <nav className={`flex ${pageName ? '2xl:hidden' : 'nav-home-bottom'} justify-center bottom-nav fixed w-full bottom-0 bg-primary`}>
      <div className="m-auto">
        <Link href="/about"><a className={NAV_LINK_CLASS}>About</a></Link>
        <Link href="/mysourcer"><a className={NAV_LINK_CLASS}>My Sourcer</a></Link>
        <Link href="/contribute"><a className={NAV_LINK_CLASS}>Contribute</a></Link>
        <Link href="/how-it-works"><a className={NAV_LINK_CLASS}>How it works</a></Link>
      </div>
    </nav>
  );
}