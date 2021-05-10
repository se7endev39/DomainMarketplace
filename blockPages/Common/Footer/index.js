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
    <nav className={`flex py-2 justify-center text-center flex-col bottom-nav fixed bottom-0 w-full lg:flex-row lg:pb-4 ` + styles.Footer}>
      <div className="pb-2">
        Copyright © 2021 Metrix Domains Inc.All Rights Reserved.
      </div>
      <div className="flex justify-evenly px-12 lg:pt-0 lg:px-4">
        <Link href="/about"><a className={styles.link}>Contact</a></Link>
        <Link href="/mysourcer"><a className={styles.link}>Terms</a></Link>
        <Link href="/contribute"><a className={styles.link}>Privacy Policy</a></Link>
        <Link href="/how-it-works"><a className={styles.link}>How it works</a></Link>
      </div>
    </nav>
  );
}
export default Footer