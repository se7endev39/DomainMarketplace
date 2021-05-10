import styles from './index.module.scss'
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Footer = (props) => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    var path = window.location.pathname;
    var pn = path.split("/").pop();
    setPageName(pn);
  })

  return (
    <nav className={`flex pt-2 justify-center text-center flex-col bottom-nav fixed bottom-0 w-full 2xl:flex-row 2xl:pb-4`} style={{borderTop: "1px solid #bebebe"}}>
      <div className="pb-2">
        Copyright © 2021 Metrix Domains Inc.All Rights Reserved.
      </div>
      <div className="flex justify-evenly 2xl:pt-0 2xl:pl-4">
        <Link href="/about"><a>Contact</a></Link>
        <Link href="/mysourcer"><a>Terms</a></Link>
        <Link href="/contribute"><a>Privacy Policy</a></Link>
        <Link href="/how-it-works"><a>How it works</a></Link>
      </div>
    </nav>
  );
}
export default Footer