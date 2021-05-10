import styles from './index.module.scss'
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const BottomNav = (props) => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    var path = window.location.pathname;
    var pn = path.split("/").pop();
    setPageName(pn);
  })

  return (
    <nav className={`flex ${pageName ? '2xl:hidden' : 'nav-home-bottom'} pt-2 justify-center text-center flex-col bottom-nav fixed w-full bottom-0`} style={{borderTop: "1px solid #bebebe"}}>
      Copyright © 2021 Metrix Domains Inc.All Rights Reserved.
      <div className="flex justify-evenly pt-2">
        <Link href="/about"><a>Contact</a></Link>
        <Link href="/mysourcer"><a>Terms</a></Link>
        <Link href="/contribute"><a>Privacy Policy</a></Link>
        <Link href="/how-it-works"><a>How it works</a></Link>
      </div>
    </nav>
  );
}
export default BottomNav