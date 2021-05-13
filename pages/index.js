import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'
import { cartActions } from '_actions'
import classnames from 'classnames'
import { MDBBtn } from 'mdbreact'
import Link from 'next/link'

function HomePage() {
  const router = useRouter()
  useEffect(() => {
    // router.push("/search?q=")
  }, [])

  return (
    <div className={styles.homepage}>
      <div className="py-4">
        <div className="flex justify-end pr-16">
          {
            ["Home", "Domains", "Help", "About Us"].map((menu, i) =>(
              <div key={i} className="px-4 text-md cursor-pointer">
                {menu}
              </div>
            ))
          }
        </div>
      </div>
      <div className={classnames(styles.canvas, "flex flex-col lg:flex-row text-center")}>
        <div className="pt-8 px-4 canvas">
          <div className={classnames('text-xl tracking-widest')}>
            WEBSITES + MARKETING
          </div>
          <h1 className={'text-5xl	font-bold pt-2'}>
            Create your own website with your &nbsp;
            <span className={'text-6xl font-black'}>DOMAIN.</span>
          </h1>
          <div className="pt-2 px-6 text-xl">
            Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. 
          </div>
          <div className="pt-4 pb-8">
            <MDBBtn color="dark">
              <Link href="/search">Find Domains</Link>
            </MDBBtn>
          </div>
        </div>
        <div className={classnames(styles.background)}>
        </div>
      </div>
      <div className="py-8 text-center">
        <div className="pt-4 text-3xl font-bold">
          Premium Domains Sale
        </div>
        <div className="pt-2 text-xl">
          Rare & exclusive metrix domain names, available for the first year.
        </div>
        <div>
          
        </div>
      </div>

    </div>
  );
}

export default HomePage;
